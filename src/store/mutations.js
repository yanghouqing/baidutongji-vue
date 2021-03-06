/**
* http://vuex.vuejs.org/zh-cn/mutations.html
* 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
* Vuex 中的 mutations 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
* 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
*/
import * as TYPES from './types';

export default {
    [TYPES.SETMY](state, val) {
        state.my = val;
    },
};
