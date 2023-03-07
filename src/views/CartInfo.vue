<template>
  <div style="background-color: #ec6d4e">
    <div class="container-fluid">
      <div class="customer-card container">
        <h5 class="fw-bold">輸入您的訂單資料</h5>
        <!-- 進度條 -->
        <div class="progress mt-4" style="height: 3px">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 35%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div>
          <router-link to="/cart"><button>回到購物車</button></router-link>
        </div>

        <div class="row">
          <div class="col-6">
            <label class="form-label mt-3">顧客姓名</label>
            <input type="text" class="form-control" />

            <label class="form-label mt-3">電話</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-12">
            <label class="form-label mt-3">電子郵件</label>
            <input type="text" class="form-control" />
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
              />
              <label class="form-check-label" for="flexCheckDefault">
                同顧客資料
              </label>
            </div>
          </div>

          <div class="col-6">
            <label class="form-label mt-3">收件人姓名</label>
            <input type="text" class="form-control" />

            <label class="form-label mt-3">收件人電話</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-12">
            <label class="form-label mt-3">地址</label>
            <select
              class="form-select mb-3"
              aria-label="Default select example"
            >
              <option selected>城市/ 縣</option>
              <option v-for="(item, index) in county" :key="index">
                {{ item }}
              </option>
            </select>
            <input type="text " class="form-control" placeholder="地址" />
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
        <router-link to="/order_list"><button>提交訂單</button></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
    };
  },
};
</script>
<style>
.customer-card {
  width: 600px;
  margin-top: 100px;
  border-radius: 10px;
  background-color: white;
  padding: 50px;
}
.progress {
  width: 300px;
}
</style>
