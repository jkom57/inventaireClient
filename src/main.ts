import { createApp } from "vue";
import { createPinia } from "pinia";

import "./assets/vendor/bootstrap/css/bootstrap.min.css"
import "./assets/vendor/fonts/circular-std/style.css"
import "./assets/libs/css/style.css"
import "./assets/vendor/fonts/fontawesome/css/fontawesome-all.css"

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
