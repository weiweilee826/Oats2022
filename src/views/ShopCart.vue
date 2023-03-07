<template>
  <div style="background-color: #ec6d4e">
    <div class="container content">
      <h1 class="title fw-bold">CART</h1>
      <div class="text-center" v-if="carts.length == 0">
        <p class="fw-bold text-white">您的購物車是空的</p>
        <router-link to="/products"
          ><button
            type="button"
            class="btn btn-outline-light btn-lg rounded-pill mt-5 fw-bold"
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
              <th>單價</th>
              <th width="10%">數量</th>
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
                {{ item.product.title }}<br />

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
                {{ item.product.price }}
              </td>
              <td class="align-middle">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="item.qty"
                >
                  <option v-for="index in 10" :key="index" :value="index">
                    {{ index }}
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td>{{ $filters.currencyUSD(countTotal) }}</td>
            </tr>

            <!-- <tr v-for="item in carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  @click="deleteCart(item.id)"
                >
                  <font-awesome-icon icon="fa-solid fa-trash" />
                </button>
              </td>
              <td>{{ item.product.title }}</td>
              <td>{{ item.qty }}</td>
              <td>{{ item.product.price }}</td>
            </tr>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td>{{ $filters.currencyUSD(countTotal) }}</td>
            </tr>
            <tr>
              <td colspan="3" class="text-end">折扣價</td>
              <td>{{ $filters.currencyUSD(discount) }}</td>
            </tr>-->
            <tr>
              <td colspan="4" class="text-end">
                <router-link to="/cart_info"
                  ><button
                    type="button"
                    class="btn btn-outline-light rounded-pill text-end"
                  >
                    前往結帳
                  </button></router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="請輸入優惠碼"
            aria-describedby="button-addon2"
            v-model="couponCode.data.code"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            @click="useCoupon"
          >
            套用優惠券
          </button>
        </div>

        <form class="text-start">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="InputEmail1"
              aria-describedby="emailHelp"
              placeholder="請輸入email"
              v-model="customrInfo.data.user.email"
            />
          </div>
          <div class="mb-3">
            <label for="inputName" class="form-label">收件人姓名</label>
            <input
              type="text"
              class="form-control"
              id="inputName"
              placeholder="請輸入姓名"
              v-model="customrInfo.data.user.name"
            />
          </div>
          <div class="mb-3">
            <label for="inputMobile" class="form-label">收件人電話</label>
            <input
              type="text"
              class="form-control"
              id="inputMobile"
              placeholder="請輸入電話"
              v-model="customrInfo.data.user.tel"
            />
          </div>

          <div class="mb-3">
            <label for="inputAddress" class="form-label">收件人地址</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="請輸入地址"
              v-model="customrInfo.data.user.address"
            />
          </div>

          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              v-model="customrInfo.data.message"
            >
            </textarea>
            <label for="floatingTextarea">留言</label>
          </div>
        </form>
        <button
          type="button"
          class="btn btn-danger text-end"
          @click="sendOrder"
        >
          送出訂單
        </button> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carts: [],
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      this.$http.get(url).then((response) => {
        console.log("ccc", response);
        this.carts = response.data.data.carts;
        console.log("123", this.carts);
      });
    },
    deleteCart(id) {
      console.log("123", id);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart/${id}`;
      this.$http.delete(url).then(() => {
        this.getCart();
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
}
.title {
  /* font-family: futura-pt, sans-serif; */
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
/* .product-content {
  background-color: #fff;
  justify-content: space-between;
  padding: 100px 180px;
  margin: 0 auto 60px;
} */
</style>
