import router from '../router';

router.beforeEach((to, from, next) => {
    // 百度统计
    // 创建vuerouter后，调用beforeEach方法，每个路由跳转时都将其跳转的路由推给百度
    if (_hmt) {
        if (to.path) {
            _hmt.push(['_trackPageview', '/' + to.fullPath]);
        }
    }
    next();
});

router.afterEach((to, from) => {
    if (to.name === from.name) return;
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    window.scrollTo(0, 1);
});
