<template>
  <div class="bodys">
    <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
      <a-button type="primary" ghost @click="evnOne">测试事件1</a-button>
      <a-button ghost @click="evnTwo">测试事件2</a-button>
    </div>
  </div>
</template>

<script>
import { message } from 'ant-design-vue';

export default {
  name: "Baidutongji",
  data() {
    return {
      articleId: undefined,
      memberId: undefined,
    };
  },
  methods: {
    evnOne() {
      window._hmt && window._hmt.push(['_trackEvent', "测试事件1", 'click']);
      message.success('操作成功');
    },
    evnTwo() {
      _hmt.push(['_trackEvent', 'search', 'click',  '测试事件2']);
      message.success('操作成功');
    }
  },
};
</script>

<style scoped>
  .bodys{
    text-align: center;
    margin-top: 1%;
  }
  .ant-btn{
    margin-right: 8px;
  }
</style>