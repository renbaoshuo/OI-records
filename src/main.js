import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store';
import router from './router';
import axios from 'axios';
import Moment from 'moment';
import './registerServiceWorker';

axios.defaults.baseURL = '/';

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;

Vue.filter('formatDate', function(value) {
    return Moment(value).locale('zh-cn').fromNow();
});

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
