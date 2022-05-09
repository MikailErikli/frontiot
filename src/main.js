import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import mitt from "mitt";
import axios from "axios";
import choiceColor from "vue-circle-choice";
import circularNav from "vue-circle-choice";
import PrimeVue from "primevue/config";
import Dropdown from "primevue/dropdown";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primeicons/primeicons.css";
import Slider from "primevue/slider";
import InputSwitch from "primevue/inputswitch";

window.api = axios.create({
  baseURL: "http://localhost:8000/api/",
});

const emitter = mitt();

let app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.use(store);
app.use(router);
app.use(PrimeVue);
app.component("choiceColor", choiceColor);
app.component("circularNav", circularNav);
app.component("MyDropdown", Dropdown);
app.component("MySlider", Slider);
app.component("InputSwitch", InputSwitch);
app.mount("#app");
