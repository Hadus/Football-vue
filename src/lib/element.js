import Vue from 'vue';
import {
  Container,
  Header,
  Main,
  Footer,
  Button,
  Switch,
  Tabs,
  TabPane,
  Row,
  Col,
  Input,
  Table,
  TableColumn,
  Form,
  FormItem,

  Loading,
  // MessageBox,
  
} from 'element-ui';

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Button);
Vue.use(Switch);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Row);
Vue.use(Col);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);

Vue.use(Loading);
// Vue.use(MessageBox);

Vue.prototype.$loading = Loading.service;
// Vue.prototype.$alert = MessageBox.alert;
