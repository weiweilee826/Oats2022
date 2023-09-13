<template>
  <div class="container content">
    <h1 class="title fw-bold">CART</h1>
    <div class="text-center" v-if="carts.length == 0">
      <p class="fw-bold text-white">您的購物車是空的</p>
      <router-link to="/products"
        ><button
          type="button"
          class="btn btn-outline-light checkout rounded-pill mt-5 fw-bold"
          style="width: 220px"
        >
          繼續購物
        </button></router-link
      >
    </div>
    <div v-else>
      <table class="table mt-4">
        <thead class="text-white">
          <tr>
            <th width="80px"></th>
            <th>商品</th>
            <th width="10%">單價</th>
            <th width="10%">數量</th>
            <th width="10%">小計</th>
          </tr>
        </thead>

        <tbody class="text-white">
          <tr v-for="item in carts" :key="item.id">
            <td>
              <img
                class="img-fluid"
                :src="item.product.imageUrl"
                style="margin: 10px 0"
                alt=""
              />
            </td>
            <td class="align-middle">
              <router-link :to="'/product/' + item.product_id">
                {{ item.product.title }}</router-link
              >
              <br />
              <button
                type="button"
                class="btn btn-outline-light btn-sm rounded-pill"
                style="margin-top: 10px"
                @click="deleteCart(item.id)"
              >
                <font-awesome-icon icon="fa-solid fa-trash" /> 刪除
              </button>
            </td>

            <td class="text-end pl-1 align-middle">
              {{ $filters.currencyUSD(item.product.price) }}
            </td>
            <td class="align-middle">
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="item.qty"
                @change="updatedQty(item)"
              >
                <option v-for="index in 10" :key="index" :value="index">
                  {{ index }}
                </option>
              </select>
            </td>
            <td class="align-middle text-end">
              {{ $filters.currencyUSD(item.product.price * item.qty) }}
            </td>
          </tr>
          <tr>
            <td colspan="2"></td>
            <td colspan="3" class="py-3">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="折扣輸入【ten%off】"
                  v-model="coupon"
                />
                <button
                  class="btn btn-outline-light"
                  type="button"
                  id="button-addon2"
                  @click="useCoupon()"
                >
                  套用優惠券
                </button>
              </div>
            </td>
          </tr>
          <tr class="border_x">
            <td colspan="5" class="text-end py-3">
              <p class="fw-bold">
                總計 {{ $filters.currencyUSD(countTotal) }}<br /><br />
                折扣價 {{ $filters.currencyUSD(discount_total) }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end mt-3">
        <router-link to="/cart_info"
          ><button
            type="button"
            class="btn btn-outline-light text-center checkout"
          >
            前往結帳
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>


<script>
import { addToCart, getCart, deleteCart } from "@/js/api.js";

export default {
  data() {
    return {
      carts: [],
      products_qty: {},
      coupon: "",
      discount_total: 0,
    };
  },
  methods: {
    async getCart() {
      this.carts = await getCart();
      this.$store.state.cartNum = this.carts.length;
      this.$store.state.carts = this.carts;
      localStorage.setItem("carts", JSON.stringify(this.carts));
    },
    deleteCart(id) {
      deleteCart(id);
      this.getCart();
    },
    updatedQty(item) {
      this.deleteCart(item.id);
      addToCart(item.product_id, item.qty);
    },
    useCoupon() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/coupon`;
      let code = {
        data: {
          code: this.coupon,
        },
      };
      this.$http.post(url, code).then((response) => {
        console.log("套用優惠券", response);
        this.discount_total = response.data.data.final_total;
      });
    },
  },
  computed: {
    countTotal() {
      return this.carts.reduce(function (sum, c) {
        return sum + c.qty * c.product.price;
      }, 0);
      
    },
  },
  created() {
    this.getCart();
  },
};
</script>
<style>
.content {
  margin-top: 50px;
  background-color: #ec6d4e;
  padding-top: 100px;
  /* height: 671px; */
}
.title {
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
a {
  text-decoration: none;
  color: white;
}
.border_x > td {
  border-style: none;
}
.checkout {
  width: 200px;
  height: 50px;
  color: #ec6d4e;
  font-weight: bold;
  background-color: #fff;
}
.checkout:hover {
  color: #fff;
  background-color: #ec6d4e;
  border: 2px solid #fff;
}
</style>
