import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import {createI18n} from 'vue-i18n'
import App from './App.vue'
import router from './router'
import { store } from './store'
import SyncWallet from '@/lib/initWallet'
import { messages, defaultLocale } from "@/translations";
import './assets/index.postcss'

const head = createHead()
const app = createApp(App)
SyncWallet()

const i18n = createI18n({
    messages,
    locale: defaultLocale,
    fallbackLocale: defaultLocale
});

app.use(router)
    .use(store)
    .use(head)
    .use(i18n)


app.mount('#app')
