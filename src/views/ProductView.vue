<template>
  <div>
    <NavBar />
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "ProductView",
  components: {
    NavBar,
  },
};
</script>