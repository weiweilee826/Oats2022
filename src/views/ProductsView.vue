<template>
  <div style="background-color: #ec6d4e">
    <loading :active="isLoading" />
    <NavBar />

    <div class="container content">
      <div class="container-md">
        <h1 class="title">PRODUCTS</h1>
        <div class="row row-cols-4 g-3">
          <div
            class="col"
            style="width: 24%"
            v-for="item in products"
            :key="item.id"
          >
            <div class="card shadow-sm">
              <router-link to="/product">
                <img src="../assets/images/products/flavor_01.webp" alt=""
              /></router-link>
              <div class="card-body">
                <p class="card-text">{{ item.title }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      更多
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">{{ item.price }} 元</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "ProductsView",
  components: {
    NavBar,
  },
  data() {
    return {
      products: [],
      tempProduct: {},
      myModal: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
      },
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/products`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response);
        if (response.data.success) {
          this.isLoading = false;
          this.products = response.data.products;
        }
      });
    },
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (token !== "") {
      this.axios.defaults.headers.common["Authorization"] = token;
      this.getProducts();
    }
  },
};
</script>

<style scoped>
.content {
  margin-top: 100px;
  background-color: #ec6d4e;
}
img {
  width: 228px;
}
.title {
  /* font-family: futura-pt, sans-serif; */
  font-weight: 300;
  font-style: normal;
  font-size: 50px;
  line-height: 1;
  letter-spacing: 10px;
  color: #fff;
  text-align: center;
  margin: 0px auto 60px;
  padding-top: 100px;
  overflow: hidden;
}
</style>
