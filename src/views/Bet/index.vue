<template>
  <div class="bet">
    <ul>
      <li>
        <m-input :value="jzPayAmount">体彩投注：</m-input> 元
      </li>
      <li>
        <m-input :value="jzRebatePoint">体彩返点：</m-input>
      </li>
      <li>
        <m-input :value="hgERebatePoint">皇冠欧返点：</m-input>
      </li>
      <li>
        <m-input :value="hgARebatePoint">皇冠亚返点：</m-input>
      </li>
      <li>
        <m-input
          size="small"
          :value="hightBenefitPoint"
        >预警利润 > </m-input> %
      </li>
      <li>
        <m-input
          size="small"
          :value="middleBenefitPoint"
        >跟踪利润 > </m-input> %
      </li>
      <li>
        <m-input :value="refreshFreq">刷新频率：</m-input> 秒
      </li>
      <li>
        <el-button
          type="primary"
          size="small"
        >确定</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Bet',
  components: {},
  mixins: [],
  props: {},
  data () {
    return {
      hightBenefitPoint: this.$store.state.bet.hightBenefitPoint,
      middleBenefitPoint: this.$store.state.bet.middleBenefitPoint,

      jzPayAmount: this.$store.state.response.jzPayAmount,
      jzRebatePoint: this.$store.state.response.jzRebatePoint,
      hgERebatePoint: this.$store.state.response.hgERebatePoint,
      hgARebatePoint: this.$store.state.response.hgARebatePoint,

      refreshFreq: this.$store.state.response.refreshFreq || this.$store.state.bet.refreshFreq,
    };
  },
  computed: {},
  watch: {},
  created () { },
  mounted () {
    console.log(this.$store.state.response)
  },
  destroyed () { },
  methods: {}
};
</script>
<style lang="scss" scoped>
.bet {
  > ul {
    width: 100%;
    display: flex;

    > li {
      flex: 2;
      &:last-child {
        flex: 1;
      }
    }
  }
}
</style>