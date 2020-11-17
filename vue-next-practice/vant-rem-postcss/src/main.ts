import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./libs/rem"
import "normalize.css"
// vant
import { Button, Area, Popup } from "vant"

createApp(App)
  .use(store)
  .use(router)
  .use(Button)
  .use(Popup)
  .use(Area)
  .mount("#app")
