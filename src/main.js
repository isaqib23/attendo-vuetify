import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import vuetify from './plugins/vuetify';
import router from './router/index';
import * as VueGoogleMaps from 'vue2-google-maps';
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify/lib'
import { vsButton, vsSelect, vsPopup } from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';

Vue.use(Vuesax, {
  // options here
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDqZGDTPpIiusoEZBUmYyPWybFj_RQX8vY' 
  }
});

Vue.config.productionTip = false;



new Vue({
  el: 'body',
  vuetify,
  Vuetify,
  vsButton,
  vsSelect,
  router,
  vsPopup,
  render: h => h(App)
}).$mount('#app');