<template>
  <el-container>
    <el-header>
      <Logo></Logo>
    </el-header>
    <el-main>
      <Bet class="bet"></Bet>
      <Filters class="filters"></Filters>
      <el-tabs type="card">
        <el-tab-pane label="体彩"></el-tab-pane>
        <el-tab-pane label="大小球"></el-tab-pane>
      </el-tabs>
      <Table></Table>
    </el-main>
    <el-footer>footer</el-footer>
  </el-container>
</template>

<script>
import Logo from '@/views/Logo/index.vue';
import Bet from '@/views/Bet/index.vue';
import Filters from '@/views/Filters/index.vue';
import Table from '@/components/Table/index.vue';
export default {
  name: 'App',
  components: {
    Logo,
    Bet,
    Filters,
    Table
  },
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
<style lang="scss">
$headHeight: 40px;
$footHeight: 40px;
.el-container {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #eee;
  text-align: center;
  line-height: 60px;
}

@mixin input-box {
  height: $headHeight;
  line-height: 38px;
  border-bottom: 1px solid #eee;
}

.bet {
  @include input-box;
  font-size: 14px;
}
.filters {
  @include input-box;
  margin-bottom: 20px;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>