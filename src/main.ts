import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 引入路由器

import "~/styles/index.scss";
import "uno.css";
import "element-plus/theme-chalk/src/message.scss"; // 可选，根据需要引入
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App);

// 注册 Element Plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
// 使用路由器
app.use(router);

// 挂载应用
app.mount("#app");
