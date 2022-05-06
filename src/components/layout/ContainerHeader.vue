<template>
    <div class="container-header-components flex">

        百度统计测试
        <!-- <div class="logo">
            <span>
                <a-avatar
                    shape="square"
                    size="large"
                    src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                />
            </span>
        </div>
        <div class="flex-1 flex menus justify-between">
            <div class="lbox flex">
                <div>工作台</div>
                <div>店铺管控</div>
                <div>商品管控</div> 
                <div>代发订单</div>
                <div>自动支付</div>
                <div>账号池</div>
            </div>
            <div class="cbox flex"></div>
            <div class="rbox flex">
                <div>
                    <a-icon class="icons" type="property-safety" />充值
                </div>
                <div @click="visibleMessage = true">
                    <a-icon class="icons" type="bell" />消息
                    <a-drawer
                        title="消息盒子"
                        placement="right"
                        width="30%"
                        :closable="true"
                        :visible="visibleMessage"
                        @close="visibleMessage = false"
                    >
                        <span>内容......</span>
                    </a-drawer>
                </div>
                <div>
                    <a-dropdown>
                        <div class="user-info">
                            <a class="ant-dropdown-link">
                                <a-icon class="icons" type="user" />乖宝宝母婴工厂店
                                <a-icon type="down" class="icons" />
                            </a>
                        </div>
                        <a-menu slot="overlay">
                            <a-menu-item>
                                <a href="javascript:;">
                                    <a-icon class="icons" type="user" />个人中心
                                </a>
                            </a-menu-item>
                            <a-menu-divider />
                            <a-menu-item @click="logoutShowConfirm">
                                <a href="javascript:;" style="color:red;">
                                    <a-icon class="icons" type="logout" />退出登录
                                </a>
                            </a-menu-item>
                        </a-menu>
                    </a-dropdown>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            visibleMessage: false,
        };
    },
    methods: {
        logoutShowConfirm() {
            this.$confirm({
                title: '确定要退出登录?',
                okText: '确定',
                cancelText: '取消',
                maskClosable: true,
                onOk() {
                    console.log('确定');
                },
                onCancel() {
                    console.log('取消');
                },
                class: 'test',
            });
        }
    }
}
</script>

<style lang="less" scoped>
.container-header-components {
    max-width: 1566px;
    min-width: 1280px;
    height: 100%;
    margin: 0 auto;
    color: #fff;
    .logo {
        width: 184px;
    }
    .menus {
        .lbox {
            width: 80%;
            div {
                cursor: pointer;
                width: calc(100% / 5);
            }
        }
        .cbox {
            width: 50%;
        }
        .rbox {
            width: 50%;
            div {
                cursor: pointer;
                margin-left: 7%;
            }
            .user-info {
                width: 100%;
                height: 60%;
                line-height: 34.8px;
                color: aliceblue;
                cursor: pointer;
                margin-top: 8.5%;
                background-color: rgba(255, 255, 255, 0.08);
                padding-left: 10px;
                padding-right: 10px;
                border-radius: 68px;
                .ant-dropdown-link {
                    color: #ffffff;
                }
            }
        }
    }
}
.icons {
    vertical-align: 0.128em;
}
</style>
