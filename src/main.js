import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'normalize.css'
import { Toast, Popup, Picker, Tab, Tabs } from 'vant'
const app = createApp(App)
//lcl
app.use(Toast).use(Popup).use(Picker).use(Tab).use(Tabs)
app.use(router).use(store).mount('#app')
