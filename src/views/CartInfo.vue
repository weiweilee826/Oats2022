<template>
  <div style="background-color: #ec6d4e">
    <div class="container-fluid">
      <div class="customer-card container">
        <h4 class="fw-bold text-center">輸入您的訂單資料</h4>

        <!-- 進度條 -->

        <ul class="progress">
          <li class="is-complete">訂單資訊</li>
          <li>確認繳費</li>
          <li class="progress__last">訂單完成</li>
        </ul>

        <!--  -->
        <div>
          <router-link to="/cart"
            ><font-awesome-icon icon="fa-solid fa-chevron-left" />
            回到購物車</router-link
          >
        </div>

        <Form @submit="onSubmit" class="mt-3">
          <div class="row">
            <div class="col-6">
              <label class="form-label mt-3">顧客姓名</label
              ><span class="required">※必填</span>
              <Field
                name="name"
                type="text"
                class="form-control"
                v-model="user.name"
                rules="required"
              />

              <label class="form-label mt-3">電話</label
              ><span class="required">※必填</span>
              <Field
                name="tel"
                type="text"
                class="form-control"
                v-model="user.tel"
                rules="required"
              />
            </div>
            <div class="col-12">
              <label class="form-label mt-3">電子郵件</label
              ><span class="required">※必填</span>
              <Field
                name="email"
                class="form-control"
                v-model="user.email"
                rules="email"
              />
            </div>

            <!-- 送貨資訊 -->
            <p class="fw-bold mt-5">送貨資訊</p>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  @click="toggleInfo()"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  同顧客資料
                </label>
              </div>
            </div>

            <div class="col-6">
              <label class="form-label mt-3">收件人姓名</label
              ><span class="required">※必填</span>
              <Field
                name="receiver_name"
                type="text"
                class="form-control"
                v-model="receiver.name"
                rules="required"
              />

              <label class="form-label mt-3">收件人電話</label
              ><span class="required">※必填</span>
              <Field
                name="receiver_tel"
                type="text"
                class="form-control"
                v-model="receiver.tel"
                rules="required"
              />
            </div>
            <div class="col-12">
              <label class="form-label mt-3">地址</label
              ><span class="required">※必填</span>
              <select
                class="form-select mb-3"
                aria-label="Default select example"
                v-model="receiver.county"
              >
                <option selected>城市/ 縣</option>
                <option
                  v-for="(item, index) in county"
                  :key="index"
                  :value="item"
                >
                  {{ item }}
                </option>
              </select>
              <Field
                name="receiver_address"
                type="text "
                class="form-control"
                placeholder="地址"
                v-model="receiver.address"
                rules="required"
              />
            </div>
            <p class="fw-bold mt-5">付款資訊</p>
            <div class="form-text">
              已選擇的付款方式: ATM
              虛擬代碼繳費（需持代碼至實體ATM或網路銀行繳費）
            </div>

            <p class="fw-bold mt-5">訂單備註</p>
            <div class="col">
              <textarea
                class="form-control mb-3"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="有什麼想告訴賣家的嗎?"
              ></textarea>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  v-model="receiver.message"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  我同意網站
                  <router-link to="/customer_term" target="_blank"
                    ><button type="button" class="btn btn-link ml-1">
                      服務條款及隱私權政策
                    </button></router-link
                  >
                </label>
              </div>
            </div>
          </div>
          <div class="mt-5 text-center">
            <router-link to="/confirmed_order">
              <button
                type="button"
                class="btn btn-outline-light text-center checkout"
                @click="sendUser"
              >
                提交訂單
              </button></router-link
            >
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field } from "vee-validate";
export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      county: [
        "臺北市",
        "新北市",
        "桃園市",
        "臺中市",
        "臺南市",
        "高雄市",
        "新竹縣",
        "苗栗縣",
        "彰化縣",
        "南投縣",
        "雲林縣",
        "嘉義縣",
        "屏東縣",
        "宜蘭縣",
        "花蓮縣",
        "臺東縣",
        "澎湖縣",
        "金門縣",
        "連江縣",
        "基隆市",
        "新竹市",
        "嘉義市",
      ],
      user: {
        name: "李潔明",
        email: "leeming413@gmail.com",
        tel: "0933728990",
      },
      receiver: {
        name: "",
        tel: "",
        county: "",
        address: "板橋區四川路二段3號",
        message: "",
      },
      checked: false,
    };
  },
  methods: {
    toggleInfo() {
      if (!this.checked) {
        this.checked = true;
        this.receiver.name = this.user.name;
        this.receiver.tel = this.user.tel;
      } else {
        this.checked = false;
        this.receiver.name = "";
        this.receiver.tel = "";
      }
    },
    onSubmit(value) {
      console.log("Submitted", value);
    },
    sendUser() {
      this.$store.state.customerInfo = {
        user: this.user,
        receiver: this.receiver,
      };
    },
  },
};
</script>
<style>
h4 {
  color: #ec6d4e;
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
</style>
