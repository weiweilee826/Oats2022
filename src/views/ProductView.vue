<template>
  <div style="background-color: #ec6d4e">
    <div class="container content">
      <div class="product-content rounded">
        <div class="row">
          <div class="col product-img">
            <img class="float-start img-fluid" :src="product.imageUrl" alt="" />
          </div>
          <div class="col text-start mb-5">
            <h4 class="fw-bold">{{ product.title }}</h4>
            <h5>{{ $filters.currencyUSD(product.price) }}</h5>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="qty"
            >
              <option v-for="index in 10" :key="index">{{ index }}</option>
            </select>
            <button
              class="btn btn btn-outline-dark"
              @click="addToCart(product.id, qty)"
            >
              加入購物車
            </button>

            <p>
              【有效期限】發貨日起約4至6週 <br />
              【外箱尺寸】310 x226 x23 公分<br />
              【送貨方式】下單後兩天出貨（不包含週末和例假日）<br />
              【包裝】單獨包裝<br />
              【運費】含運<br />
              【保存方法】避免陽光直射（夏季建議冷藏或冷凍保存）
            </p>

            <p class="line">
              【原料】<br />
              {{ product.description }}
            </p>

            <p>
              【營養成分】<br />
              {{ product.content }}
            </p>
          </div>
          <hr />

          <div>
            <img src="../assets/images/icons/oats_logo_color.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductView",
  components: {},
  data() {
    return {
      product: [],
      myModal: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false,
      },
      qty: 1,
    };
  },
  methods: {
    getProduct() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/product/${this.$route.params.id}`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          this.isLoading = false;
          this.product = response.data.product;
        }
      });
    },
    addToCart(id, qty) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      console.log(id, qty);
      const cart = {
        product_id: id,
        qty: this.qty,
      };
      this.$http.post(url, { data: cart }).then((response) => {
        console.log("a", response);
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
      this.getProduct();
    }
  },
};
</script>
<style>
.content {
  margin-top: 50px;
  background-color: #ec6d4e;
  padding-top: 100px;
}
.product-content {
  background-color: #fff;
  justify-content: space-between;
  padding: 100px 180px;
}
.product-img {
  width: 456px;
}
.line {
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(43, 43, 43, 0.15);
}
h6 {
  color: #ec6d4e;
}
</style>
