import Vue from 'vue';
import App from './app.vue'
import router from '@/router'

import './static/css/base.scss';


new Vue({
    router,
    component: { App },
    render: h => h(App)
}).$mount('#app')

