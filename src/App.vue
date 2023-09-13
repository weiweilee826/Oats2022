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

  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#ec6d4e");
  },

  beforeUnmount() {
    document.querySelector("body").removeAttribute("style");
  },
};
</script>

<style>
</style>
