import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import { messages } from './lang'

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  messages: messages
})

const app = createApp(App)

app.use(i18n)
app.mount('#app')
