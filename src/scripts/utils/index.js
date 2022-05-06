/**
 * 防抖
 * @callback fn 回调函数
 * @param { number } delay 定时器时长
 */
export const debounce = (fn, delay = 1500) => {
    let timeout;
    return function (event) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.call(this, event);
        }, delay);
    };
};

/**
 * 节流
 * @callback fn 回调函数
 * @param { number } delay 定时器时长
 */
export const throttle = (fn, delay = 1500) => {
    let lastTime = null;
    // 返回新的函数
    return function () {
        const nowTime = new Date();
        if (nowTime - lastTime > delay || !lastTime) {
            fn.apply(this, arguments);
            lastTime = nowTime;
        }
    };
};

/**
 * 节流 + 防抖
 * @callback fn 回调函数
 * @param { number } delay 定时器时长
 */
export const debounceThrottle = (fn, delay = 5000) => {
    let startTime = 0;
    let timer = null;
    return function (event) {
        const endTime = new Date().getTime();
        clearTimeout(timer);
        if (endTime - startTime > delay) {
            fn.apply(this, arguments);
            startTime = new Date().getTime();
        } else {
            timer = setTimeout(() => {
                fn.call(this, event);
            }, delay);
        }
    };
};
