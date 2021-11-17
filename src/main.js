import { createApp } from 'vue/dist/vue.esm-bundler'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Page404 from '@/views/Page404.vue'
import '@/index.css'
import '@/assets/tailwind.css'


const routes = [
    { path: '/', component: Home },
    { path: '/:pathMatch(.*)*', component: Page404 }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


createApp({})
    .use(router)
    .mount('#app')
