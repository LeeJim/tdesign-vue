/* eslint-disable */
const docs = [
  {
    title: '开始',
    titleEn: 'Start',
    type: 'doc', // 普通文档
    children: [
      {
        title: '快速开始',
        titleEn: 'Quick Start',
        name: 'getting-started',
        path: '/vue/getting-started',
        component: () => import('@/site/docs/getting-started.md'),
      },
      {
        title: '最佳实践',
        titleEn: 'Best Practice',
        name: 'quick-start',
        path: '/vue/quick-start',
        component: () => import('@/site/docs/starter.md'),
      },
      {
        title: '更新日志',
        titleEn: 'CHANGELOG',
        name: 'changelog',
        path: '/vue/changelog',
        component: () => import('@/CHANGELOG.md'),
      },
      {
        title: '组件概览',
        titleEn: 'Component overview',
        name: 'overview',
        path: '/vue/overview',
        component: () => import('@common/docs/web/overview.md'),
      },
    ],
  },
  {
    title: '全局配置',
    titleEn: 'Global Config',
    type: 'doc',
    children: [
      {
        title: '全局特性配置',
        titleEn: 'Config',
        name: 'config',
        path: '/vue/config',
        component: () => import('tdesign-vue/config-provider/config-provider.md'),
      },
      {
        title: '自定义主题',
        titleEn: 'Custom theme',
        name: 'custom-theme',
        path: '/vue/custom-theme',
        component: () => import('@common/theme.md'),
      },
      {
        title: '暗黑模式',
        titleEn: 'Dark Mode',
        name: 'dark-mode',
        path: '/vue/dark-mode',
        component: () => import('@common/dark-mode.md'),
      },
    ],
  },
  {
    title: '基础',
    titleEn: 'Base',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Button 按钮',
        titleEn: 'Button',
        name: 'button',
        path: '/vue/components/button',
        component: () => import('tdesign-vue/button/button.md'),
        componentEn: () => import('tdesign-vue/button/button.en-US.md'),
      },
      {
        title: 'Icon 图标',
        titleEn: 'Icon',
        name: 'icon',
        path: '/vue/components/icon',
        component: () => import('tdesign-vue/icon/icon.md'),
        componentEn: () => import('tdesign-vue/icon/icon.en-US.md'),
      },
      {
        title: 'Link 链接',
        titleEn: 'Icon',
        name: 'icon',
        path: '/vue/components/link',
        component: () => import('tdesign-vue/link/link.md'),
        componentEn: () => import('tdesign-vue/link/link.en-US.md'),
      },
    ],
  },
  {
    title: '布局',
    titleEn: 'Layout',
    type: 'component',
    children: [
      {
        title: 'Divider 分割线',
        titleEn: 'Divider',
        name: 'divider',
        path: '/vue/components/divider',
        component: () => import('tdesign-vue/divider/divider.md'),
        componentEn: () => import('tdesign-vue/divider/divider.en-US.md'),
      },
      {
        title: 'Grid 栅格',
        titleEn: 'Grid',
        name: 'grid',
        path: '/vue/components/grid',
        component: () => import('tdesign-vue/grid/grid.md'),
        componentEn: () => import('tdesign-vue/grid/grid.en-US.md'),
      },
      {
        title: 'Layout 布局',
        titleEn: 'Layout',
        name: 'layout',
        path: '/vue/components/layout',
        component: () => import('tdesign-vue/layout/layout.md'),
        componentEn: () => import('tdesign-vue/layout/layout.en-US.md'),
      },
      {
        title: 'Space 间距',
        titleEn: 'Space',
        name: 'space',
        path: '/vue/components/space',
        component: () => import('tdesign-vue/space/space.md'),
        componentEn: () => import('tdesign-vue/space/space.en-US.md'),
      },
    ],
  },
  {
    title: '导航',
    titleEn: 'Navigation',
    type: 'component',
    children: [
      {
        title: 'Affix 固钉',
        titleEn: 'Affix',
        name: 'affix',
        path: '/vue/components/affix',
        component: () => import('tdesign-vue/affix/affix.md'),
        componentEn: () => import('tdesign-vue/affix/affix.en-US.md'),
      },
      {
        title: 'Anchor 锚点',
        titleEn: 'Anchor',
        name: 'anchor',
        path: '/vue/components/anchor',
        component: () => import('tdesign-vue/anchor/anchor.md'),
        componentEn: () => import('tdesign-vue/anchor/anchor.en-US.md'),
      },
      {
        title: 'BackTop 回到顶部',
        name: 'back-top',
        path: '/vue/components/back-top',
        component: () => import('tdesign-vue/back-top/back-top.md'),
      },
      {
        title: 'Breadcrumb 面包屑',
        titleEn: 'Breadcrumb',
        name: 'breadcrumb',
        path: '/vue/components/breadcrumb',
        component: () => import('tdesign-vue/breadcrumb/breadcrumb.md'),
        componentEn: () => import('tdesign-vue/breadcrumb/breadcrumb.en-US.md'),
      },
      {
        title: 'Dropdown 下拉菜单',
        titleEn: 'Dropdown',
        name: 'dropdown',
        path: '/vue/components/dropdown',
        component: () => import('tdesign-vue/dropdown/dropdown.md'),
        componentEn: () => import('tdesign-vue/dropdown/dropdown.en-US.md'),
      },
      {
        title: 'Menu 导航菜单',
        titleEn: 'Menu',
        name: 'menu',
        path: '/vue/components/menu',
        component: () => import('tdesign-vue/menu/menu.md'),
        componentEn: () => import('tdesign-vue/menu/menu.en-US.md'),
      },
      {
        title: 'Pagination 分页',
        titleEn: 'Pagination',
        name: 'pagination',
        path: '/vue/components/pagination',
        component: () => import('tdesign-vue/pagination/pagination.md'),
        componentEn: () => import('tdesign-vue/pagination/pagination.en-US.md'),
      },
      {
        title: 'Steps 步骤条',
        titleEn: 'Steps',
        name: 'steps',
        path: '/vue/components/steps',
        component: () => import('tdesign-vue/steps/steps.md'),
        componentEn: () => import('tdesign-vue/steps/steps.en-US.md'),
      },
      {
        title: 'StickyTool 侧边栏',
        titleEn: 'StickyTool',
        name: 'StickyTool',
        path: '/vue/components/sticky-tool',
        component: () => import('tdesign-vue/sticky-tool/sticky-tool.md'),
        componentEn: () => import('tdesign-vue/sticky-tool/sticky-tool.en-US.md'),
      },
      {
        title: 'Tabs 选项卡',
        titleEn: 'Tabs',
        name: 'tabs',
        path: '/vue/components/tabs',
        component: () => import('tdesign-vue/tabs/tabs.md'),
        componentEn: () => import('tdesign-vue/tabs/tabs.en-US.md'),
      },
    ],
  },
  {
    title: '输入',
    titleEn: 'Input',
    type: 'component', // 组件文档
    children: [
      {
        title: 'AutoComplete 自动填充',
        titleEn: 'AutoComplete',
        name: 'auto-complete',
        path: '/vue/components/auto-complete',
        component: () => import('tdesign-vue/auto-complete/auto-complete.md'),
        componentEn: () => import('tdesign-vue/auto-complete/auto-complete.en-US.md'),
      },
      {
        title: 'Cascader 级联组件',
        titleEn: 'Cascader',
        name: 'cascader',
        path: '/vue/components/cascader',
        component: () => import('tdesign-vue/cascader/cascader.md'),
        componentEn: () => import('tdesign-vue/cascader/cascader.en-US.md'),
      },
      {
        title: 'Checkbox 多选框',
        titleEn: 'Checkbox',
        name: 'checkbox',
        path: '/vue/components/checkbox',
        component: () => import('tdesign-vue/checkbox/checkbox.md'),
        componentEn: () => import('tdesign-vue/checkbox/checkbox.en-US.md'),
      },
      {
        title: 'ColorPicker 颜色选择器',
        name: 'color-picker',
        path: '/vue/components/color-picker',
        component: () => import('tdesign-vue/color-picker/color-picker.md'),
      },
      {
        title: 'DatePicker 日期选择器',
        titleEn: 'DatePicker',
        name: 'date-picker',
        path: '/vue/components/date-picker',
        component: () => import('tdesign-vue/date-picker/date-picker.md'),
        componentEn: () => import('tdesign-vue/date-picker/date-picker.en-US.md'),
      },
      {
        title: 'Form 表单',
        titleEn: 'Form',
        name: 'form',
        path: '/vue/components/form',
        component: () => import('tdesign-vue/form/form.md'),
        componentEn: () => import('tdesign-vue/form/form.en-US.md'),
      },
      {
        title: 'Input 输入框',
        titleEn: 'Input',
        name: 'input',
        path: '/vue/components/input',
        component: () => import('tdesign-vue/input/input.md'),
        componentEn: () => import('tdesign-vue/input/input.en-US.md'),
      },
      {
        title: 'InputAdornment 输入装饰器',
        titleEn: 'InputAdornment',
        name: 'input-adornment',
        path: '/vue/components/input-adornment',
        component: () => import('tdesign-vue/input-adornment/input-adornment.md'),
        componentEn: () => import('tdesign-vue/input-adornment/input-adornment.en-US.md'),
      },
      {
        title: 'InputNumber 数字输入框',
        titleEn: 'InputNumber',
        name: 'input-number',
        path: '/vue/components/input-number',
        component: () => import('tdesign-vue/input-number/input-number.md'),
        componentEn: () => import('tdesign-vue/input-number/input-number.en-US.md'),
      },
      {
        title: 'TagInput 标签输入框',
        titleEn: 'TagInput',
        name: 'tag-input',
        docType: 'form',
        path: '/vue/components/tag-input',
        component: () => import('tdesign-vue/tag-input/tag-input.md'),
        componentEn: () => import('tdesign-vue/tag-input/tag-input.en-US.md'),
      },
      {
        title: 'Radio 单选框',
        titleEn: 'Radio',
        name: 'radio',
        path: '/vue/components/radio',
        component: () => import('tdesign-vue/radio/radio.md'),
        componentEn: () => import('tdesign-vue/radio/radio.en-US.md'),
      },
      {
        title: 'RangeInput 范围输入框',
        titleEn: 'RangeInput',
        name: 'range-input',
        path: '/vue/components/range-input',
        component: () => import('tdesign-vue/range-input/range-input.md'),
        componentEn: () => import('tdesign-vue/range-input/range-input.en-US.md'),
      },
      {
        title: 'Select 选择器',
        titleEn: 'Select',
        name: 'select',
        path: '/vue/components/select',
        component: () => import('tdesign-vue/select/select.md'),
        componentEn: () => import('tdesign-vue/select/select.en-US.md'),
      },
      {
        title: 'SelectInput 筛选器输入框',
        titleEn: 'SelectInput',
        name: 'select-input',
        docType: 'form',
        path: '/vue/components/select-input',
        component: () => import('tdesign-vue/select-input/select-input.md'),
        componentEn: () => import('tdesign-vue/select-input/select-input.en-US.md'),
      },
      {
        title: 'Slider 滑块',
        titleEn: 'Slider',
        name: 'slider',
        path: '/vue/components/slider',
        component: () => import('tdesign-vue/slider/slider.md'),
        componentEn: () => import('tdesign-vue/slider/slider.en-US.md'),
      },
      {
        title: 'Switch 开关',
        titleEn: 'Switch',
        name: 'switch',
        path: '/vue/components/switch',
        component: () => import('tdesign-vue/switch/switch.md'),
        componentEn: () => import('tdesign-vue/switch/switch.en-US.md'),
      },
      {
        title: 'Textarea 多行文本框',
        titleEn: 'Textarea',
        name: 'textarea',
        path: '/vue/components/textarea',
        component: () => import('tdesign-vue/textarea/textarea.md'),
        componentEn: () => import('tdesign-vue/textarea/textarea.en-US.md'),
      },
      {
        title: 'Transfer 穿梭框',
        titleEn: 'Transfer',
        name: 'transfer',
        path: '/vue/components/transfer',
        component: () => import('tdesign-vue/transfer/transfer.md'),
        componentEn: () => import('tdesign-vue/transfer/transfer.en-US.md'),
      },
      {
        title: 'TimePicker 时间选择器',
        titleEn: 'TimePicker',
        name: 'time-picker',
        path: '/vue/components/time-picker',
        component: () => import('tdesign-vue/time-picker/time-picker.md'),
        componentEn: () => import('tdesign-vue/time-picker/time-picker.en-US.md'),
      },
      {
        title: 'TreeSelect 树选择',
        titleEn: 'TreeSelect',
        name: 'tree-select',
        path: '/vue/components/tree-select',
        component: () => import('tdesign-vue/tree-select/tree-select.md'),
        componentEn: () => import('tdesign-vue/tree-select/tree-select.en-US.md'),
      },
      {
        title: 'Upload 上传',
        titleEn: 'Upload',
        name: 'upload',
        path: '/vue/components/upload',
        component: () => import('tdesign-vue/upload/upload.md'),
        componentEn: () => import('tdesign-vue/upload/upload.en-US.md'),
      },
    ],
  },
  {
    title: '数据展示',
    titleEn: 'Data Display',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Avatar 头像',
        titleEn: 'Avatar',
        name: 'avatar',
        path: '/vue/components/avatar',
        component: () => import('tdesign-vue/avatar/avatar.md'),
        componentEn: () => import('tdesign-vue/avatar/avatar.en-US.md'),
      },
      {
        title: 'Badge 徽标',
        titleEn: 'Badge',
        name: 'badge',
        path: '/vue/components/badge',
        component: () => import('tdesign-vue/badge/badge.md'),
        componentEn: () => import('tdesign-vue/badge/badge.en-US.md'),
      },
      {
        title: 'Calendar 日历',
        titleEn: 'Calendar',
        name: 'calendar',
        path: '/vue/components/calendar',
        component: () => import('tdesign-vue/calendar/calendar.md'),
        componentEn: () => import('tdesign-vue/calendar/calendar.en-US.md'),
      },
      {
        title: 'Card 卡片',
        titleEn: 'Card',
        name: 'card',
        docType: 'data',
        path: '/vue/components/card',
        component: () => import('tdesign-vue/card/card.md'),
        componentEn: () => import('tdesign-vue/card/card.en-US.md'),
      },
      {
        title: 'Collapse 折叠面板',
        titleEn: 'Collapse',
        name: 'collapse',
        docType: 'data',
        path: '/vue/components/collapse',
        component: () => import('tdesign-vue/collapse/collapse.md'),
        componentEn: () => import('tdesign-vue/collapse/collapse.en-US.md'),
      },
      {
        title: 'Comment 评论',
        titleEn: 'Comment',
        name: 'comment',
        path: '/vue/components/comment',
        component: () => import('tdesign-vue/comment/comment.md'),
        componentEn: () => import('tdesign-vue/comment/comment.en-US.md'),
      },
      {
        title: 'Image 图片',
        titleEn: 'Image',
        name: 'image',
        path: '/vue/components/image',
        component: () => import('tdesign-vue/image/image.md'),
        componentEn: () => import('tdesign-vue/image/image.en-US.md'),
      },
      {
        title: 'ImageViewer 图片预览',
        titleEn: 'ImageViewer',
        name: 'image-viewer',
        path: '/vue/components/image-viewer',
        component: () => import('tdesign-vue/image-viewer/image-viewer.md'),
        componentEn: () => import('tdesign-vue/image-viewer/image-viewer.en-US.md'),
      },
      {
        title: 'List 列表',
        titleEn: 'List',
        name: 'list',
        path: '/vue/components/list',
        component: () => import('tdesign-vue/list/list.md'),
        componentEn: () => import('tdesign-vue/list/list.en-US.md'),
      },
      {
        title: 'Loading 加载',
        titleEn: 'Loading',
        name: 'loading',
        path: '/vue/components/loading',
        component: () => import('tdesign-vue/loading/loading.md'),
        componentEn: () => import('tdesign-vue/loading/loading.en-US.md'),
      },
      {
        title: 'Progress 进度条',
        titleEn: 'Progress',
        name: 'progress',
        path: '/vue/components/progress',
        component: () => import('tdesign-vue/progress/progress.md'),
        componentEn: () => import('tdesign-vue/progress/progress.en-US.md'),
      },
      {
        title: 'Skeleton 骨架屏',
        titleEn: 'Skeleton',
        name: 'skeleton',
        path: '/vue/components/skeleton',
        component: () => import('tdesign-vue/skeleton/skeleton.md'),
        componentEn: () => import('tdesign-vue/skeleton/skeleton.en-US.md'),
      },
      {
        title: 'Swiper 轮播框',
        titleEn: 'Swiper',
        name: 'swiper',
        path: '/vue/components/swiper',
        component: () => import('tdesign-vue/swiper/swiper.md'),
        componentEn: () => import('tdesign-vue/swiper/swiper.en-US.md'),
      },
      {
        title: 'Table 表格',
        titleEn: 'Table',
        name: 'table',
        path: '/vue/components/table',
        component: () => import('tdesign-vue/table/table.md'),
        componentEn: () => import('tdesign-vue/table/table.en-US.md'),
      },
      {
        title: 'Tag 标签',
        titleEn: 'Tag',
        name: 'tag',
        path: '/vue/components/tag',
        component: () => import('tdesign-vue/tag/tag.md'),
        componentEn: () => import('tdesign-vue/tag/tag.en-US.md'),
      },
      {
        title: 'Timeline 时间轴',
        titleEn: 'Timeline',
        name: 'timeline',
        path: '/vue/components/timeline',
        component: () => import('tdesign-vue/timeline/timeline.md'),
        componentEn: () => import('tdesign-vue/timeline/timeline.en-US.md'),
      },
      {
        title: 'Tooltip 文字提示',
        titleEn: 'Tooltip',
        name: 'tooltip',
        path: '/vue/components/tooltip',
        component: () => import('tdesign-vue/tooltip/tooltip.md'),
        componentEn: () => import('tdesign-vue/tooltip/tooltip.en-US.md'),
      },
      {
        title: 'Tree 树',
        titleEn: 'Tree',
        name: 'tree',
        path: '/vue/components/tree',
        component: () => import('tdesign-vue/tree/tree.md'),
        componentEn: () => import('tdesign-vue/tree/tree.en-US.md'),
      },
      {
        title: 'Watermark 水印',
        titleEn: 'Watermark',
        name: 'watermark',
        path: '/vue/components/watermark',
        component: () => import('tdesign-vue/watermark/watermark.md'),
        componentEn: () => import('tdesign-vue/watermark/watermark.en-US.md'),
      },
      {
        title: 'Rate 评分',
        name: 'rate',
        docType: 'data',
        path: '/vue/components/rate',
        component: () => import('tdesign-vue/rate/rate.md'),
        componentEn: () => import('tdesign-vue/rate/rate.en-US.md'),
      },
    ],
  },
  {
    title: '消息提醒',
    titleEn: 'Notifications',
    type: 'component', // 组件文档
    children: [
      {
        title: 'Alert 警告提醒',
        titleEn: 'Alert',
        name: 'alert',
        path: '/vue/components/alert',
        component: () => import('tdesign-vue/alert/alert.md'),
        componentEn: () => import('tdesign-vue/alert/alert.en-US.md'),
      },
      {
        title: 'Dialog 对话框',
        titleEn: 'Dialog',
        name: 'dialog',
        path: '/vue/components/dialog',
        component: () => import('tdesign-vue/dialog/dialog.md'),
        componentEn: () => import('tdesign-vue/dialog/dialog.en-US.md'),
      },
      {
        title: 'Drawer 抽屉',
        titleEn: 'Drawer',
        name: 'drawer',
        path: '/vue/components/drawer',
        component: () => import('tdesign-vue/drawer/drawer.md'),
        componentEn: () => import('tdesign-vue/drawer/drawer.en-US.md'),
      },
      {
        title: 'Guide 引导',
        name: 'guide',
        path: '/vue/components/guide',
        component: () => import('tdesign-vue/guide/guide.md'),
      },
      {
        title: 'Message 全局提示',
        titleEn: 'Message',
        name: 'message',
        path: '/vue/components/message',
        component: () => import('tdesign-vue/message/message.md'),
        componentEn: () => import('tdesign-vue/message/message.en-US.md'),
      },
      {
        title: 'Notification 消息通知',
        titleEn: 'Notification',
        name: 'notification',
        path: '/vue/components/notification',
        component: () => import('tdesign-vue/notification/notification.md'),
        componentEn: () => import('tdesign-vue/notification/notification.en-US.md'),
      },
      {
        title: 'Popconfirm 气泡确认框',
        titleEn: 'Popconfirm',
        name: 'popconfirm',
        path: '/vue/components/popconfirm',
        component: () => import('tdesign-vue/popconfirm/popconfirm.md'),
        componentEn: () => import('tdesign-vue/popconfirm/popconfirm.en-US.md'),
      },
      {
        title: 'Popup 弹出层',
        titleEn: 'Popup',
        name: 'popup',
        path: '/vue/components/popup',
        component: () => import('tdesign-vue/popup/popup.md'),
        componentEn: () => import('tdesign-vue/popup/popup.en-US.md'),
      },
    ],
  },
];

const enDocs = docs.map((doc) => {
  return {
    ...doc,
    title: doc.titleEn,
    children: doc?.children?.map((child) => {
      return {
        title: child.titleEn,
        name: `${child.name}-en`,
        path: `${child.path}-en`,
        meta: { lang: 'en' },
        component: child.componentEn || child.component,
      };
    }),
  };
});

export default { docs, enDocs };
