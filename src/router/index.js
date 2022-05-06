import Vue from 'vue';
import VueRouter from 'vue-router';
// import App from '../App.vue';

// 避免到当前位置的冗余导航 即重复触发了同一个路由
const originalReplace = VueRouter.prototype.replace;

VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

const lazyLoading = (name) => {
    if (process.env.NODE_ENV === 'development') {
        return () => import(`@/views/${name}.vue`);
    }
    return require(`@/views/${name}.vue`).default;
};

const DefaultIndex = {
    render(h) {
        return h('router-view', {
            key: this.$route.path,
        });
    },
};

// 路由配置
export default new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        {
            path: '/',
            component: lazyLoading('Home'),
            redirect: {
                name: 'Baidutongji',
            },
            children: [
                {
                    path: '/baidutongji',
                    name: 'Baidutongji',
                    component: lazyLoading('test/Baidutongji'),
                    meta: {
                        title: '百度统计测试',
                    },
                },
            ],
        },
        {
            path: '*',
            redirect: '/',
        },
    ],
});
