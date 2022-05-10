<template>
  <div id="nav">
    <Navbar />
  </div>
  <router-view />
</template>

<script>
import Navbar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin-bottom: 2rem;
  position: relative;
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
