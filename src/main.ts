import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { i18n, initializeI18n } from './i18n'

const app = createApp(App)

app.use(i18n)
app.config.globalProperties.$t = i18n.global.t

// Initialize i18n and mount app
initializeI18n().then(() => {
  app.mount('#app')
})
