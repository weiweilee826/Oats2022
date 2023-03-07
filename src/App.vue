<template>
  <NavBar />
  <router-view />
  <FooterMain />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterMain from "@/components/FooterMain.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterMain,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
