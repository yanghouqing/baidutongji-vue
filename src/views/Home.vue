<template>
    <div class="page-container">
        <a-locale-provider :locale="zhCN">
            <container-layout />
        </a-locale-provider>
    </div>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale-provider/zh_CN';
import ContainerLayout from '@/components/layout/ContainerLayout';

export default {
    components: {
        ContainerLayout,
    },
    data() {
        return {
            zhCN,
        };
    }
};
</script>
