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
import InputText from "primevue/inputtext";
import ColorPicker from "primevue/colorpicker";
import Button from "primevue/button";

window.api = axios.create({
  baseURL: "http://192.168.54.220:3000/",
});

const emitter = mitt();

let app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.use(store);
app.use(router);
app.use(PrimeVue);
app.component("MyDropdown", Dropdown);
app.component("MySlider", Slider);
app.component("InputSwitch", InputSwitch);
app.component("InputText", InputText);
app.component("ColorPicker", ColorPicker);
app.component("MyButton", Button);
app.mount("#app");
