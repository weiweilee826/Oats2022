<template>
  <div style="background-color: #ec6d4e">
    <div class="container content">
      <div class="container-md">
        <h1 class="title">PRODUCTS</h1>

        <div class="row cards">
          <template v-for="item in products">
            <div
              class="col"
              style="width: 24%"
              v-if="item.is_enabled"
              :key="item.id"
            >
              <!-- 傳參數 params -->
              <router-link :to="'/product/' + item.id">
                <div class="card bg-transparent text-white border-0">
                  <img class="rounded" :src="item.imageUrl" alt="" />
                  <div class="card-body text-start">
                    <p class="card-text">{{ item.title }}</p>
                    <p class="card-text">
                      {{ $filters.currencyUSD(item.price) }}
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsView",
  components: {},
  data() {
    return {
      products: [],
      myModal: {},
      isNew: false,
      status: {
        fileUploading: false,
      },
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/products`;
      this.$http.get(api).then((response) => {
        if (response.data.success) {
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
    // if (token !== "") {
    this.axios.defaults.headers.common["Authorization"] = token;
    this.getProducts();
    // }
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
h1 {
  font-weight: 500;
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
.cards {
  justify-content: flex-start;
}
</style>
