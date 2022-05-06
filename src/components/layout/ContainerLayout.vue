<template>
    <a-layout>
        <a-layout-header>
            <container-header />
        </a-layout-header>
        <a-layout-content>
            <div class="layout">
                <!-- <div class="menus-side"></div> -->
                <router-view />
            </div>
        </a-layout-content>
    </a-layout>
</template>

<script>
import ContainerHeader from './ContainerHeader';

export default {
    components: {
        ContainerHeader,
    },
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>

<style lang="less">
// .ant-layout {
//     min-height: 100vh;
//     background: #f6f6fa;
//     .ant-layout-header {
//         background: #141f33;
//         width: 100%;
//         height: 58px;
//         // padding: 0;
//         position: fixed;
//         z-index: 99;
//     }
//     .ant-layout-content {
//         padding: 0 50px; // 新加
//         .layout {
//             max-width: 1566px;
//             min-width: 1280px;
//             margin: 0 auto;
//             padding-top: 58px;
//             box-sizing: border-box;
//             .menus-side {
//                 width: 224px;
//                 height: 100vh;
//                 background: #fff;
//                 position: fixed;
//                 top: 0;
//                 margin-left: -246px;
//                 padding-top: 58px;
//                 box-sizing: border-box;
//             }
//         }
//     }
// }
</style>
