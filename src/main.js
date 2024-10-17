import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import Plan from "./components/Plan.vue";
import PlanPicker from "./components/PlanPicker.vue";

createApp(App).component("plan", Plan).component("plan-picker", PlanPicker).mount("#app");
