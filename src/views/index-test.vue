<template>
  <h1 @click="getObjetById(1)">
    Choisissez votre couleur pour {{ objet.libelle }}
  </h1>
  <div id="conteneur" class="mt-5">
    <div>
      <MyDropdown
        v-model="objet.mode"
        class="mt-5"
        :options="modes"
        dataKey="id_mode"
        optionLabel="libelle"
        placeholder="Selectionner le mode"
        @change="onChangeMode()"
      />
    </div>

    <div id="picker">
      <ColorPicker
        v-model="objet.rgb"
        @change="onChangeMode()"
        :inline="true"
      />
    </div>

    <h5>Luminosité: {{ objet.seuil_luminosite }}</h5>
    <MySlider
      v-model="objet.seuil_luminosite"
      class="mt-5"
      orientation="vertical"
      :step="20"
      :min="0"
      :max="4000"
      @change="onChangeMode()"
    />
  </div>
  <div>
    <InputText
      id="délaiMouv"
      type="text"
      v-model="objet.delai_mouvement"
      placeholder="délai de mouvement"
      @change="onChangeMode()"
    />
  </div>
</template>

<script>
import { computed } from "vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      value6: 50,
      selectedMode: null,
      objetid: 1,
      objet: {},
      form: {
        libelle: "",
        rgb: "",
        seuil_luminosite: 0,
        delai_mouvement: 0,
        mode: { id_mode: 0 },
      },
    };
  },

  mounted() {
    this.getModes();
    this.getObjetById(1);
  },

  methods: {
    ...mapActions(["getModes"]),

    async getObjetById(objetid) {
      window.api
        .get(`objet/` + objetid)
        .then((result) => {
          this.objet = result.data[0];
          console.log("toto", result.data[0], this.objet);
        })
        .catch((error) => {
          // handle authentication and validation errors here
          console.log("ERRR::", error);
        });
    },
    onChangeMode() {
      window.api
        .post("/objet/1", this.objet)
        .then((response) => {
          this.$emit("completed", response.data);
        })
        .catch((error) => {
          // handle authentication and validation errors here
          console.log("ERRR::", error.response.data);
        });
    },
  },

  computed: {
    modes() {
      console.log("computed", this.$store.state.mode);
      return this.$store.state.mode;
    },
  },
};
</script>

<style scoped>
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
