<template>
  <div>
    <NavbarAdmin />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarAdmin from "@/components/NavbarAdmin.vue";

export default {
  name: "AdminView",
  components: {
    NavbarAdmin,
  },
};
</script>