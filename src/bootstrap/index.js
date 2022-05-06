import Vue from 'vue';
import Directives from '@/scripts/directives';
import store from '../store';
import router from '../router';

import '@/assets/style/css/index.css';
import './axios.js';
import './store.js';
import './router.js';
import './ant-design-vue.js';

Vue.use(Directives);

// 全局api接口请求处理
const Api = require('@/scripts/base/axios').default;
window.API = new Api(process.env.VUE_APP_API_PREFIX);

export default {
    store,
    router,
};
