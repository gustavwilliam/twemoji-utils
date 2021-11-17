import { createApp } from 'vue/dist/vue.esm-bundler'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import '@/index.css'
import '@/assets/tailwind.css'


const routes = [
    { path: '/', component: Home },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


createApp({})
    .use(router)
    .mount('#app')
