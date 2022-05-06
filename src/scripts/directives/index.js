import copy from './copy';
import debounce from './debounce';
import longpress from './longpress';
import emoji from './emoji';
import LazyLoad from './LazyLoad';
import premission from './permission';
import waterMarker from './waterMarker';
import draggable from './draggable';
import click from './click';
import focus from './focus';

/**
 * vue自定义指令
 * @returns 复制粘贴指令 v-copy
 * @returns 长按指令 v-longpress
 * @returns 输入框防抖指令 v-debounce
 * @returns 禁止表情及特殊字符 v-emoji
 * @returns 图片懒加载 v-LazyLoad
 * @returns 权限校验指令 v-premission
 * @returns 实现页面水印 v-waterMarker
 * @returns 拖拽指令 v-draggable
 * @returns 焦点必须在实时DOM树中 v-click
 * @returns 输入框自动获取焦点 v-focus
 */
const directives = {
    copy,
    debounce,
    longpress,
    emoji,
    LazyLoad,
    premission,
    waterMarker,
    draggable,
    click,
    focus,
};

export default {
    install(Vue) {
        Object.keys(directives).forEach((key) => {
            Vue.directive(key, directives[key])
        });
    },
}
