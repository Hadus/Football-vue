<template>
  <label class="input-box">
    <slot></slot>
    <input
      :class="[size]"
      type="number"
      v-model="inputValue"
    >
  </label>
</template>

<script>
export default {
  name: 'm-input',
  components: {},
  mixins: [],
  props: {
    size: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
    },
  },
  data () {
    return {
      inputValue: this.value
    };
  },
  computed: {
  },
  watch: {},
  created () { },
  mounted () { },
  destroyed () { },
  methods: {}
};
</script>
<style lang="scss" scoped>
.input-box {
  input {
    width: 80px;
    height: 24px;
    padding: 0 8px;
    font-size: 13px;
    color: #555;
    border: 1px solid #dcdfe6;
    border-radius: 4px;

    &.big {
      width: 100px;
    }

    &.small {
      width: 50px;
    }
    &[type="number"] {
      -moz-appearance: textfield;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
}
</style>