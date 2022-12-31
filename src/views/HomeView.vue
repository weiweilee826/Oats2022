<template>
  <div>
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