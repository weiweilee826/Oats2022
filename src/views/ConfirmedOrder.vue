<template>
  <div class="container-fluid">
    <div class="customer-card container">
      <h4 class="fw-bold text-center">確認您的訂單資料</h4>

      <!-- 進度條 -->
      <ul class="progress">
        <li class="is-complete">訂單資訊</li>
        <li class="is-complete">確認</li>
        <li class="progress__last">完成</li>
      </ul>

      <div>
        <router-link to="/cart_info"
          ><font-awesome-icon icon="fa-solid fa-chevron-left" />
          更正您的資料</router-link
        >
      </div>

      <table class="order_info mt-3">
        <tr class="border_b text-center">
          <td class="border_r">產品名稱</td>
          <td>價格</td>
          <td>數量</td>
          <td>小計</td>
        </tr>
        <tr v-for="item in carts" :key="item.id">
          <td class="border_r text-start">{{ item.product.title }}</td>
          <td class="text-end">
            {{ $filters.currencyUSD(item.product.price) }}
          </td>
          <td class="text-center">{{ item.qty }}</td>
          <td class="text-end">{{ $filters.currencyUSD(item.total) }}</td>
        </tr>
        <tr class="border_t">
          <td class="border_r">總計</td>
          <td colspan="3" class="text-end">
            {{ $filters.currencyUSD(total) }}
          </td>
        </tr>
        <tr class="">
          <td class="border_r">折扣</td>
          <td colspan="3" class="text-end">
            {{ $filters.currencyUSD(final_total) }}
          </td>
        </tr>
      </table>

      <h5 class="fw-bold mt-5 border_b">顧客資訊</h5>
      <p class="customer_info">
        姓名：{{ customerInfo.user.name }} <br />
        電話號碼：{{ customerInfo.user.tel }}<br />
        郵箱地址：{{ customerInfo.user.email }}
      </p>

      <h5 class="fw-bold mt-5 border_b">送貨資訊</h5>
      <p class="customer_info">
        姓名：{{ customerInfo.receiver.name }}<br />
        地址：{{ customerInfo.receiver.county + customerInfo.receiver.address
        }}<br />
        電話號碼：{{ customerInfo.receiver.tel }}<br />
      </p>
      <h5 class="fw-bold mt-5 border_b">付款資訊</h5>
      <p class="customer_info" v-if="final_total == 0">
        銀行代號 國泰世華 (013) <br />
        虛擬帳戶 282123X643109X99 <br />
        繳費金額(NTD) {{ $filters.currencyUSD(total) }}<br />
      </p>
      <p class="customer_info" v-else>
        銀行代號 國泰世華 (013) <br />
        虛擬帳戶 282123X643109X99 <br />
        繳費金額(NTD) {{ $filters.currencyUSD(final_total) }}<br />
      </p>

      <div class="mt-5 text-center">
        <router-link to="/order_done">
          <button
            type="button"
            class="btn btn-outline-light text-center checkout"
            @click="sendOrder"
          >
            完成您的訂單
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      customerInfo: {},
      carts: [],
      totel: 0,
      final_total: 0,
    };
  },
  methods: {
    sendOrder() {
      console.log("123");
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/order`;
      const orders = {
        user: {
          name: this.customerInfo.receiver.name,
          email: this.customerInfo.user.email,
          tel: this.customerInfo.receiver.tel,
          address:
            this.customerInfo.receiver.county +
            this.customerInfo.receiver.address,
          message: this.customerInfo.receiver.message,
        },
        message: "",
      };
      this.$http.post(url, { data: orders }).then((response) => {
        console.log("456", response);
      });
    },

    countTotal() {
      this.total = this.carts.reduce(function (sum, c) {
        return sum + c.qty * c.product.price;
      }, 0);
      this.final_total = this.carts.reduce(function (sum, c) {
        return sum + c.final_total;
      }, 0);
    },
  },
  created() {
    this.customerInfo = JSON.parse(localStorage.getItem("customerInfo"));
    this.carts = JSON.parse(localStorage.getItem("carts"));
    this.countTotal();
  },
};
</script>
<style>
h4 {
  color: #ec6d4e;
}
h5 {
  font-size: 15pt;
  padding-bottom: 15pt;
}
a {
  text-decoration: none;
  color: #ec6d4e;
  font-weight: 700;
}
.customer-card {
  width: 600px;
  margin-top: 100px;
  border-radius: 10px;
  background-color: white;
  padding: 50px;
}
.required {
  display: inline;
  font-weight: 700;
  color: #e82121;
  font-size: 11px;
  margin-left: 5px;
}
/* 進度條 */
.progress {
  list-style: none;
  padding: 40px;
  display: table;
  table-layout: fixed;
  width: 100%;
  background-color: #fff;
}
.progress > li {
  position: relative;
  display: table-cell;
  text-align: center;
  font-size: 12pt;
  font-weight: 700;
}
/* 圓圈 */
.progress > li:before {
  content: "";
  position: relative;
  display: block;
  background: #dfe3e4;
  width: 0.8em;
  height: 0.8em;
  margin: 0 auto;
  margin-bottom: 0.25em;
  text-align: center;
  line-height: 3em;
  border-radius: 100%;
  z-index: 1000;
}
/* 左線 */
.progress > li:after {
  content: "";
  position: absolute;
  display: block;
  background: #dfe3e4;
  width: 100%;
  height: 0.1em;
  top: 0.4em;
  right: 50%;
  z-index: 0;
}
/* 消除尾線 */
.progress > li:first-child:after {
  display: none;
}
/* 字變色 */
.progress > li.is-complete {
  color: #ec6d4e;
}
.progress > li.is-complete:before,
.progress > li.is-complete:after {
  color: #fff;
  background: #ec6d4e;
}
/* .progress > li.is-active {
  color: #dfe3e4;
}
.progress > li.is-active:before {
  color: #fff;
  background: #ec6d4e; 
} */
/* 進度條end */
.order_info {
  margin: 0 auto;
  width: 100%;
  font-size: 11pt;
}
.border_r {
  border-right: 1pt solid #1b1b1b;
  padding: 15px 0;
}
.border_b {
  border-bottom: 1pt solid #1b1b1b;
}
.border_t {
  border-top: 1pt solid #1b1b1b;
}
.sendbtn {
  height: 56px;
  background-color: #ec6d4e;
  border-radius: 5px;
}
.sendbtn > a {
  color: #fff;
  padding: 0 auto;
}
.checkout {
  width: 100%;
  height: 50px;
  color: #fff;
  font-weight: bold;
  background-color: #ec6d4e;
}
.checkout:hover {
  color: #fff;
  background-color: #ec6d4e;
  border: 2px solid #fff;
}
.customer_info {
  font-size: 11pt;
}
</style>
