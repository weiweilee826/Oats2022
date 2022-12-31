<template>
  <div>
    <NavbarAdmin />
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarAdmin from "@/components/NavbarAdmin.vue";

export default {
  name: "Admin",
  components: {
    NavbarAdmin,
  },
};
</script>