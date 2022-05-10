<template>
  <h1>Connexion</h1>

  <div>
    <InputText
      class="mt-5"
      id="mdp"
      v-model="form.login"
      type="text"
      placeholder="password"
    />
  </div>
  <MyButton @click="login()" id="connectButton" class="mt-5" label="Submit" />

  <div id="choixLampe">
    <template v-for="objet in objets" :key="objet.id_objet">
      <router-link
        class="btn btn-success btn-sm mt-4 ms-3"
        :to="{ name: 'objet', params: { ObjetId: objet.id_objet } }"
        >{{ objet.libelle }}</router-link
      >
    </template>
  </div>
</template>

<script>
import { computed } from "vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        login: "",
      },
    };
  },

  mounted() {
    this.getobjets();
    console.log("get", this.getobjets());
  },

  methods: {
    ...mapActions(["getobjets"]),

    login() {
      window.api
        .post("/login", this.form)
        .then((response) => {
          this.error = "";
          this.$emit("completed", response.data);
          document.getElementById("mdp").style.display = "none";
          document.getElementById("connectButton").style.display = "none";
          document.getElementById("choixLampe").style.display = "initial";
        })
        .catch((error) => {
          alert("username ou mail incorrect");
          this.error = "username ou mail incorrect";
          console.log("ERRR::", error.response.data);
        });
    },
  },

  computed: {
    objets() {
      console.log("computed", this.$store.state.objet);
      return this.$store.state.objet;
    },
  },
};
</script>

<style scoped>
#choixLampe {
  display: none;
}
</style>
