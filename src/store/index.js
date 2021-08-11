/**引入vue**/
import Vue from 'vue';

/**引入vuex**/
import Vuex from 'vuex';

/* 导入数据 */
const res =  require('../data/FootballData_New.json');
/**注册vuex**/
Vue.use(Vuex);

const store = new Vuex.Store({
  // modules: {
  //   a: moduleA
  // },
  state: {
    response: {...res},
    bet: {
      clock: null, // 自动刷新定时器
      refreshFreq: 50, // 秒
      isFirstTimeInitBet: true, // 第一次进来界面才会initBet
      middleBenefitPoint: '3.0',
      hightBenefitPoint: '3.2',
    },
    filters:{

    },
    audioAlert:{
      alertTimes: 0, // 需要报警的次数
      isPlayAudio: false, // 是否播放音频
    }
  },
  mutations: {
    
  },
  getters: {
    
  },
  actions: {
    
  }
});

export default store;
