import { createApp } from 'vue'
import { Toast } from 'vant';
import App from './App.vue'
import router from './router'
import store from './store'

import 'amfe-flexible';
import './assets/css/reset.css';


createApp(App)
    .use(store)
    .use(router)
    .use(Toast)
    .mount('#app')
