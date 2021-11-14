import { createApp } from 'vue/dist/vue.esm-bundler'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './index.css'
import './assets/tailwind.css'


const routes = [
    { path: '/', component: App },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


createApp({})
    .use(router)
    .mount('#app')
