<template>
  <!-- :popup-props="{ trigger: 'hover' }" -->
  <t-select-input
    :value="selectValue"
    :popup-visible="popupVisible"
    placeholder="Please Select"
    clearable
    auto-width
    allow-input
    @popup-visible-change="onPopupVisibleChange"
    @clear="onClear"
    @input-change="onInputChange"
  >
    <template #panel>
      <ul class="tdesign-demo__select-input-ul-auto-width">
        <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
          {{ item.label }}
        </li>
      </ul>
    </template>
    <template #suffixIcon>
      <chevron-down-icon />
    </template>
  </t-select-input>
</template>
<script>
import { ChevronDownIcon } from 'tdesign-icons-vue';

const options = [
  // 全选
  { label: 'all frameworks', checkAll: true },
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default {
  components: { ChevronDownIcon },
  data() {
    return {
      selectValue: { label: 'tdesign-vue', value: 1 },
      options,
      popupVisible: false,
    };
  },
  methods: {
    onOptionClick(item) {
      this.selectValue = item;
      this.popupVisible = false;
    },
    onClear() {
      this.selectValue = undefined;
    },
    onPopupVisibleChange(val) {
      this.popupVisible = val;
    },
    onInputChange(ctx) {
      console.log(ctx);
    },
  },
};
</script>
<style>
.tdesign-demo__select-input-ul-auto-width {
  padding: 2px 0;
  margin: 0 -2px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tdesign-demo__select-input-ul-auto-width > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-auto-width > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
