import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
      },
    theme:{
        primary:'#FFC400',
        success:'#00E676',
        info:'#651FFF',
        error:'#D50000',
        white:'#Fff',
        light:'#FF9190',
        new:'#33ccdd'
    }
});
