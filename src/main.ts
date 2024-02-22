import './styles/common.scss'

import { createApp } from 'vue'
import { setupStore } from './stores'

import App from './App.vue'
import router from './router'

import './assets/tailwind.css'

const app = createApp(App)

//注册图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 全局注册store
setupStore(app);

app.use(router)

app.mount('#app')
