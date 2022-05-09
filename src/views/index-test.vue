<template>
  <h1>Choisissez votre couleur</h1>
  <div id="conteneur" class="mt-5">
    <div>
      <MyDropdown
        v-model="selectedCity"
        class="mt-5"
        :options="cities"
        optionLabel="name"
        placeholder="Selectionner le mode"
      />
    </div>

    <div id="picker">
      <color-picker
        id="colorPicker"
        class="mt-5"
        v-bind="color"
        @input="onInput"
        :aria-valuetext="valuetext"
      />
    </div>

    <h5>Luminosité: {{ value6 }}</h5>
    <MySlider v-model="value6" class="mt-5" orientation="vertical" />
  </div>
  <div>
    <p class="mt-5">Allumer/Eteindre</p>
    <InputSwitch v-model="checked1" />
  </div>
</template>

<script>
import ColorPicker from "@radial-color-picker/vue-color-picker";
import { reactive, computed } from "vue";

const colors = [
  "#ff0000",
  "#ffff00",
  "#008000",
  "#00FFFF",
  "#0000FF",
  "#FF00FF",
  "#FF0000",
];

export default {
  components: { ColorPicker },
  data() {
    const color = reactive({
      hue: 141,
      saturation: 60,
      luminosity: 75,
    });

    const valuetext = computed(() => {
      // Note: you don't have to cut corners.
      // Use regular switch/if-else if it makes more sense
      const index = Math.round(color.hue / 60);
      const value = colors[index];
      console.log(value);

      return `light ${value}`;
    });
    return {
      checked1: false,
      value6: 50,
      selectedCity: null,
      color,
      valuetext,
      cities: [
        { name: "Automatique", code: "NY" },
        { name: "Manuel", code: "RM" },
      ],
    };
  },
  methods: {
    onInput(hue) {
      this.color.hue = hue;
    },
  },
};
</script>

<style scoped>
@import "~@radial-color-picker/vue-color-picker/dist/vue-color-picker.min.css";

#picker {
  padding: 5%;
  display: flex;
  align-items: center;
}

.p-slider-horizontal,
.p-inputtext {
  width: 14rem;
}
.p-slider-vertical {
  height: 14rem;
}

#conteneur {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
}
</style>
