import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import moment from 'moment';

Vue.filter('dateFormat', function(value) {
    if (value) {
        return moment(String(value)).format('hh:mm DD/MM/YYYY')
    }
});
