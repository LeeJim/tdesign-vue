import Vue from 'vue';
import { prefix } from '../config';
import TIconClose from '../icon/close';
import TButton, { ButtonProps } from '../button';
import TIconInfoCircleFilled from '../icon/info-circle-filled';
import TIconCheckCircleFilled from '../icon/check-circle-filled';
import { getPropsApiByEvent } from '../utils/helper';
import { CloseContext } from '@TdTypes/dialog/TdDialogProps';
import props from '@TdTypes/dialog/props';
import { renderTNodeJSX, renderContent } from '../utils/render-tnode';

type FooterButton = string | ButtonProps | TNode;
type FooterButtonType = 'confirm' | 'cancel';

const name = `${prefix}-dialog`;

function GetCSSValue(v: string | number) {
  return isNaN(Number(v)) ? v : `${Number(v)}px`;
}

// 注册元素的拖拽事件
function InitDragEvent(dragBox: HTMLElement) {
  const target = dragBox;
  target.addEventListener('mousedown', (targetEvent: MouseEvent) => {
    // 算出鼠标相对元素的位置
    const disX = targetEvent.clientX - target.offsetLeft;
    const disY = targetEvent.clientY - target.offsetTop;
    function mouseMoverHander(documentEvent: MouseEvent) {
      // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
      const left = documentEvent.clientX - disX;
      const top = documentEvent.clientY - disY;
      // 移动当前元素
      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
    }
    function mouseUpHandler() {
      // 鼠标弹起来的时候不再移动
      document.removeEventListener('mousemove', mouseMoverHander);
      // 预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
      document.removeEventListener('mouseup', mouseUpHandler);
    }
    // 元素按下时注册document鼠标监听事件
    document.addEventListener('mousemove', mouseMoverHander);
    // 鼠标弹起来移除document鼠标监听事件
    document.addEventListener('mouseup', mouseUpHandler);
  });
}

export default Vue.extend({
  name,

  components: {
    TIconClose,
    TIconInfoCircleFilled,
    TIconCheckCircleFilled,
    TButton,
  },

  props: { ...props },

  computed: {
    // 是否模态形式的对话框
    isModal(): boolean {
      return this.mode === 'modal';
    },
    // 是否非模态对话框
    isModeless(): boolean {
      return this.mode === 'modeless';
    },
    maskClass(): ClassName {
      return [`${name}-mask`, !this.showOverlay && `${name}-mask--hidden`];
    },
    dialogClass(): ClassName {
      const dialogClass = [`${name}`, `${name}--default`, `${name}--${this.placement}`];
      if (['modeless', 'modal'].includes(this.mode)) {
        dialogClass.push(`${name}--fixed`);
      }
      return dialogClass;
    },
    dialogStyle(): Styles {
      const { top, placement } = this;
      let topStyle = {};

      // 设置了top属性
      if (top) {
        const topValue = GetCSSValue(top);
        topStyle = {
          top: topValue,
          transform: 'translate(-50%, 0)',
          transformOrigin: '25% 25%',
          maxHeight: `calc(100% - ${topValue})`,
        };
      } else if (placement === 'top') {
        topStyle = {
          maxHeight: 'calc(100% - 20%)',
        };
      }
      return { width: GetCSSValue(this.width), ...topStyle };
    },
  },

  watch: {
    visible(value) {
      this.disPreventScrollThrough(value);
      this.addKeyboardEvent(value);
    },
  },

  beforeDestroy() {
    this.disPreventScrollThrough(false);
    this.addKeyboardEvent(false);
  },

  // 注册v-draggable指令,传入ture时候初始化拖拽事件
  directives: {
    draggable(el, binding) {
      // el 指令绑定的元素
      if (el && binding && binding.value) {
        InitDragEvent(el);
      }
    },
  },

  methods: {
    disPreventScrollThrough(disabled: boolean) {
      // 防止滚动穿透,modal形态才需要
      if (this.preventScrollThrough && this.isModal) {
        document.body.style.overflow = disabled ? 'hidden' : '';
      }
    },
    addKeyboardEvent(status: boolean) {
      if (status) {
        document.addEventListener('keydown', this.keyboardEvent);
      } else {
        document.removeEventListener('keydown', this.keyboardEvent);
      }
    },
    keyboardEvent(e: KeyboardEvent) {
      if (e.code === 'Escape') {
        this.emitEvent('keydown-esc', e);
        // 根据closeOnKeydownEsc判断按下ESC时是否触发close事件
        if (this.closeOnKeydownEsc) {
          this.emitCloseEvent({
            trigger: 'keydownEsc',
            e,
          });
        }
      }
    },
    overlayAction(e: MouseEvent) {
      this.emitEvent('click-overlay', e);
      // 根据closeOnClickOverlay判断点击蒙层时是否触发close事件
      if (this.closeOnClickOverlay) {
        this.emitCloseEvent({
          trigger: 'clickOverlay',
          e,
        });
      }
    },
    closeBtnAcion(e: MouseEvent) {
      this.emitEvent('click-close-btn', e);
      this.emitCloseEvent({
        trigger: 'clickCloseBtn',
        e,
      });
    },
    cancelBtnAction(e: MouseEvent) {
      this.emitEvent('click-cancel', e);
      this.emitCloseEvent({
        trigger: 'clickCancel',
        e,
      });
    },
    confirmBtnAction(e: MouseEvent) {
      this.emitEvent('click-confirm', e);
    },
    // 打开弹窗动画结束时事件
    afterEnter() {
      this.emitEvent('opened');
    },
    // 关闭弹窗动画结束时事件
    afterLeave() {
      this.emitEvent('closed');
    },
    emitEvent(name: string, event?: Event) {
      this.$emit(name, event);
      const handleName = getPropsApiByEvent(name);
      typeof this[handleName] === 'function' && this[handleName](event);
    },
    emitCloseEvent(context: CloseContext) {
      this.$emit('close', context);
      typeof this.onClose === 'function' && this.onClose(context);
      // 默认关闭弹窗
      this.$emit('update:visible', false);
    },

    // Vue在引入阶段对事件的处理还做了哪些初始化操作。Vue在实例上用一个_events属性存贮管理事件的派发和更新，
    // 暴露出$on, $once, $off, $emit方法给外部管理事件和派发执行事件
    // 所以通过判断_events某个事件下监听函数数组是否超过一个，可以判断出组件是否监听了当前事件
    hasEventOn(name: string) {
      // _events 因没有被暴露在vue实例接口中，只能把这个规则注释掉
      /* eslint-disable dot-notation */
      const eventFuncs = this['_events']?.[name];
      return !!eventFuncs?.length;
    },
    getIcon() {
      const icon = {
        info: <TIconInfoCircleFilled class="t-is-info" />,
        warning: <TIconInfoCircleFilled class="t-is-warning" />,
        danger: <TIconInfoCircleFilled class="t-is-error" />,
        success: <TIconCheckCircleFilled class="t-is-success" />,
      };
      return icon[this.theme];
    },
    getDefaultBtn(btnType: FooterButtonType, btnApi: FooterButton) {
      const isCancel = btnType === 'cancel';
      const clickAction = isCancel ? this.cancelBtnAction : this.confirmBtnAction;
      const variant = isCancel ? 'outline' : 'base';
      const isApiObject = typeof btnApi === 'object';
      return (
        <t-button variant={variant} onClick={clickAction} props={isApiObject ? btnApi : {}}>
          { (btnApi && typeof btnApi === 'object') ? btnApi.content : btnApi }
        </t-button>
      );
    },
    isUseDefault(btnApi: FooterButton) {
      const baseTypes = ['string', 'object'];
      return Boolean(btnApi && baseTypes.includes(typeof btnApi));
    },
    getDefaultFooter() {
      const defaultCancel = this.getDefaultBtn('cancel', this.cancelBtn);
      const defaultConfirm = this.getDefaultBtn('confirm', this.confirmBtn);
      return (
        <div>
          {this.isUseDefault(this.cancelBtn) ? defaultCancel : renderTNodeJSX(this, 'cancelBtn')}
          {this.isUseDefault(this.confirmBtn) ? defaultConfirm : renderTNodeJSX(this, 'confirmBtn')}
        </div>
      );
    },
    renderDialog() {
      // header 值为 true 显示空白头部
      const defaultHeader = <h5 class="title"></h5>;
      const defaultCloseBtn = <t-icon-close name="close"></t-icon-close>;
      const body = renderContent(this, 'default', 'body');
      const defaultFooter = this.getDefaultFooter();
      return (
        // /* 非模态形态下draggable为true才允许拖拽 */
        <div
          key="dialog"
          class={this.dialogClass}
          style={this.dialogStyle}
          v-draggable={this.isModeless && this.draggable}
        >
          <div class={`${name}__header`}>{this.getIcon()}{renderTNodeJSX(this, 'header', defaultHeader)}</div>
          <span class={`${name}__close`} onClick={this.closeBtnAcion}>{renderTNodeJSX(this, 'closeBtn', defaultCloseBtn)}</span>
          <div class={`${name}__body`}>{body}</div>
          <div class={`${name}__footer`}>{renderTNodeJSX(this, 'footer', defaultFooter)}</div>
        </div>
      );
    },
  },

  render() {
    const maskView = this.isModal && <div key="mask" class={this.maskClass} onClick={this.overlayAction}></div>;
    const dialogView = this.renderDialog();
    const view = [maskView, dialogView];
    const ctxStyle: any = { zIndex: this.zIndex };
    const ctxClass = [`${name}-ctx`, { 't-dialog-ctx--fixed': this.mode === 'modal' }];
    return (
      <transition
        duration={300}
        name={`${name}-zoom__vue`}
        onAfterEnter={this.afterEnter}
        onAfterLeave={this.afterLeave}
      >
        {(!this.destroyOnClose || this.visible) && (
          <div v-show={this.visible} class={ctxClass} style={ctxStyle} v-transfer-dom={this.attach}>
            {view}
          </div>
        )}
      </transition>
    );
  },
});
