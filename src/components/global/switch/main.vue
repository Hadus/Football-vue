<template>
  <div class="switch-box">
    <div class="switch-handle"></div>
  </div>
</template>

<script>
export default {
  name: 'm-switch',
  components: {},
  mixins: [],
  props: {
    size: {
      type: String,
      default: ''
    },
  },
  data () {
    return {};
  },
  computed: {},
  watch: {},
  created () { },
  mounted () {
  },
  destroyed () { },
  methods: {}
};
</script>
<style lang="scss" scoped>
.switch-box {
  position: relative;
  width: 56px;
  height: 26px;
  line-height: 22px;
  background-color: #fff;
  background-clip: padding-box;
  border: 2px solid #ddd;
  border-radius: 20px;
  -webkit-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -webkit-transition-property: background-color, border;
  transition-property: background-color, border;
  cursor: pointer;

  &:before {
    position: absolute;
    top: 1px;
    right: 5px;
    font-size: 12px;
    color: #999;
    text-transform: uppercase;
    content: "Off";
  }

  &.active {
    background-color: #4cd964;
    border-color: #4cd964;
  }

  &.active:before {
    left: 12px;
    color: #fff;
    content: "On";
    background-color: #4cd964;
    border-color: #4cd964;
  }

  & .switch-handle {
    position: absolute;
    top: -1px;
    left: -1px;
    z-index: 1;
    width: 22px;
    height: 22px;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 16px;
    -webkit-box-shadow: 0 2px 5px;
    box-shadow: 0 2px 5px;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
    -webkit-transition-property: -webkit-transform, width, left;
    transition-property: transform, width, left;
    transform: translate(0px, 0px);
  }

  &.active .switch-handle {
    transition-duration: 0.2s;
    transform: translate(34px, 0px);
  }
}
</style>