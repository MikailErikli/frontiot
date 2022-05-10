<template>
  <h1>Choisissez votre couleur pour {{ objet.libelle }}</h1>
  <div id="conteneur" class="mt-5">
    <div>
      <h5>Etat: {{ etatled }}</h5>
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
        class="ms-5"
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
    <label for="délaiMouv">délaie de mouvement :</label>
    <br />
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
      etat: "",
      etatled: "",
      timeout: null,
    };
  },

  mounted() {
    this.getModes();
    this.getObjetById();
    this.myFunction();
  },

  methods: {
    ...mapActions(["getModes"]),

    async getObjetById() {
      window.api
        .get(`objet/${this.$route.params.ObjetId}`)
        .then((result) => {
          this.objet = result.data[0];
          console.log("toto", result.data[0], this.objet);
        })
        .catch((error) => {
          // handle authentication and validation errors here
          console.log("ERRR::", error);
        });
    },

    myFunction() {
      this.timeout = setInterval(this.etatLed, 1000);
    },

    alertFunc() {
      console.log("Hello!");
    },

    etatLed() {
      if (this.$route.params.ObjetId) {
        window.api
          .get(`objet/${this.$route.params.ObjetId}`)
          .then((result) => {
            this.etat = result.data[0].etat_led;
            console.log("toto", this.etat);
          })
          .catch((error) => {
            // handle authentication and validation errors here
            console.log("ERRR::", error);
          });

        if (this.etat == 1) {
          this.etatled = "Allumé";
        } else if (this.etat == 0) {
          this.etatled = "Eteint";
        }
      }
    },

    onChangeMode() {
      window.api
        .post(`objet/${this.$route.params.ObjetId}`, this.objet)
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
