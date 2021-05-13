//import 'Core from core';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false;

const app = new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
if (window.Cypress) {
    window.app = app;
}

