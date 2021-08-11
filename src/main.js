/**引入vue**/
import Vue from 'vue';

/**引入normalize**/
import 'normalize.css/normalize.css'

/**完整引入element**/
import '@/lib/element.js';
import 'element-ui/lib/theme-chalk/index.css';

/* 引入 css */
import '@/assets/styles/index.scss';

/**引入.js路由配置文件**/
import store from '@/store/index.js';

/**引入App组件**/
import App from '@/App.vue';

/* 导入全局组件 */
import './components';

/**开启devtools插件**/
Vue.config.devtools = true;

/**实例化vue**/
new Vue({
  el: '#app',
  data: {},
  methods: {},
  mounted() {},
  store,
  render: h => h(App)
});