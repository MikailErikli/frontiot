<template>
  <ul>
    <router-link to="/"
      ><li style="float: right">
        <a class="active" href="#about">Deconnexion</a>
      </li></router-link
    >
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ffff;
  background-color: gray;
}
#logo {
  width: 30x;
  height: 30px;
}
li {
  float: left;
  background-color: gray;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background-color: gray;
}
li a:hover {
  background-color: #fbfbfb;
}
.active {
  background-color: #ffffff;
  border-left: 1px black solid;
  border-right: 1px black solid;
  border-top: 1px black solid;
  background-color: #bd2624;
}
</style>
