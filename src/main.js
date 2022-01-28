import { registerSW } from "virtual:pwa-register";

import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";

createApp(App).use(router).mount("#app");

registerSW();
