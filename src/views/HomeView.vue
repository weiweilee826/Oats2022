<template>
  <div class="main1">
    <NavBar />
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar";

export default {
  name: "HomeView",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.main1 {
  background-color: #ec6d4e;
}
</style>
