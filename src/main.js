import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import Plan from "./components/Plan.vue";
import PlanPicker from "./components/PlanPicker.vue";
import ColorPicker from "./components/ColorPicker.vue";
import ColorOption from "./components/ColorOption.vue";

createApp(App)
  .component("plan", Plan)
  .component("plan-picker", PlanPicker)
  .component("color-picker", ColorPicker)
  .component("color-option", ColorOption)
  .mount("#app");
