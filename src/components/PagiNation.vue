<template>
  <div class="outer">
    <nav aria-label="Page navigation example ">
      <ul class="pagination bg-oats">
        <li class="page-item" :class="{ disabled: !pagination.has_pre }">
          <a
            class="page-link"
            @click.prevent="emitGetProduct(pagination.current_page - 1)"
            href="#"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in pagination.total_pages"
          :key="page"
          :class="{ active: pagination.current_page == page }"
        >
          <a class="page-link" @click.prevent="emitGetProduct(page)" href="#">{{
            page
          }}</a>
        </li>
        <li class="page-item" :class="{ disabled: !pagination.has_next }">
          <a
            class="page-link"
            @click.prevent="emitGetProduct(pagination.current_page + 1)"
            href="#"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: ["pagination"],
  data() {
    return {};
  },
  methods: {
    emitGetProduct(page) {
      this.$emit("getProducts", page);
    },
  },
};
</script>
<style>
.outer {
  display: flex;
}
nav {
  margin: 0 auto;
}
.page-link.active,
.active > .page-link {
  background-color: #ec6d4e;
  border-color: #ec6d4e;
}
.page-link {
  color: #ec6d4e;
}
</style>
