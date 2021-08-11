<template>
  <div class="filter">
    <ul>
      <li>
        <m-input>比赛类型：</m-input>
      </li>
      <li>
        <m-input>级别：</m-input>
      </li>
      <li>
        <m-input>队伍：</m-input>
      </li>
      <li>
        <el-button
          type="primary"
          size="small"
        >筛选</el-button>
      </li>
      <li class="audio-select">
        预警提醒:
        <m-switch class="switch"></m-switch>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  components: {},
  mixins: [],
  props: {},
  data () {
    return {};
  },
  computed: {},
  watch: {},
  created () { },
  mounted () { },
  destroyed () { },
  methods: {}
};
</script>
<style lang="scss" scoped>
.filter {
  > ul {
    width: 100%;
  }

  > ul > li {
    display: inline-block;
    min-width: 120px;
    margin-right: 5px;
    &.audio-select {
      float: right;
    }
  }
  .switch {
    float: right;
    margin-top: 5px;
  }
}
</style>