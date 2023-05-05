<template>
  <div style="background-color: #ec6d4e">
    <div class="container-fluid">
      <div class="customer-card container">
        <h4 class="fw-bold text-center">確認訂單資訊</h4>

        <!-- 進度條 -->
        <ul class="progress">
          <li class="is-complete">訂單資訊</li>
          <li>確認繳費</li>
          <li class="progress__last">訂單完成</li>
        </ul>
        <div>
          <router-link to="/cart_info"
            ><font-awesome-icon icon="fa-solid fa-chevron-left" />
            更正您的資料</router-link
          >
        </div>

        <table class="order_info mt-3">
          <tr class="border_b">
            <td class="border_r">產品名稱</td>
            <td>價格</td>
            <td>數量</td>
            <td>小計</td>
          </tr>
          <tr class="border_b">
            <td class="border_r text-start">1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td class="border_r">總計</td>
            <td colspan="3">2</td>
          </tr>
        </table>

        <h5 class="fw-bold mt-5 border_b">顧客資訊</h5>
        <p>
          姓名：李源 <br />
          地址：東京都台東區1-1-1xx 泰壽公寓<br />
          電話號碼：0162573524 <br />
          郵箱地址：weiweilee826@gmail.com
        </p>
        <h5 class="fw-bold mt-5 border_b">送貨資訊</h5>
        <p>
          姓名：李源<br />
          地址：東京都台東區1-1-1xx 泰壽公寓<br />
          電話號碼：0162573524<br />
        </p>
        <h5 class="fw-bold mt-5 border_b">付款資訊</h5>
        <p>
          銀行代號 國泰世華 (013) <br />
          虛擬帳戶 2821238643109499 <br />
          繳費金額(NTD) 3,800
        </p>

        <div class="mt-5 text-center">
          <router-link to="/">
            <button
              type="button"
              class="btn btn-outline-dark rounded-pill text-end"
            >
              完成您的訂單
            </button></router-link
          >
        </div>
        <div class="sendbtn"><a href="/">完成您的訂單</a></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    sendOrder() {
      // const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/order`;
      console.log("1123");
      // const orders = {
      //   user: {
      //     name: this.receiver.name,
      //     email: this.user.email,
      //     tel: this.receiver.tel,
      //     address: this.county + this.address,
      //     message: this.receiver.message,
      //   },
      //   message: "",
      // };
      // this.$http.post(url, { data: orders }).then(() => {
      // });
    },
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
.progress > li:before {
  content: "";
  display: block;
  margin: 0 auto;
  background: #dfe3e4;
  width: 0.8em;
  height: 0.8em;
  text-align: center;
  margin-bottom: 0.25em;
  line-height: 3em;
  border-radius: 100%;
  position: relative;
  z-index: 1000;
}
.progress > li:after {
  content: "";
  position: absolute;
  display: block;
  background: #dfe3e4;
  width: 100%;
  height: 0.1em;
  top: 0.4em;
  left: 50%;
  z-index: 0;
}
.progress > li:last-child:after {
  display: none;
}
.progress > li.is-complete {
  color: #ec6d4e;
}
.progress > li.is-complete:before,
.progress > li.is-complete:after {
  color: #fff;
  background: #ec6d4e;
}
.progress > li.is-active {
  color: #dfe3e4;
}
.progress > li.is-active:before {
  color: #fff;
  background: #ec6d4e;
}
.order_info {
  margin: 0 auto;
  width: 100%;
}
td {
  background-color: lightblue;
  height: 10px;
}
.border_r {
  border-right: 1pt solid #1b1b1b;
}
.border_b {
  border-bottom: 1pt solid #1b1b1b;
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
</style>
