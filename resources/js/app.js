require('./bootstrap');
import './src/plugins/vue-composition-api'
import '../sass/styles/styles.scss'
import Vue from 'vue'
import App from './src/App.vue'
import vuetify from './src/plugins/vuetify'
import router from './src/router'
import store from './src/store'


window.Vue = require('vue').default;
Vue.config.productionTip = false

Vue.component('example-component', require('./components/ExampleComponent.vue').default);


new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app')