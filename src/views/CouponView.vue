<template>
  <div style="background-color: #ec6d4e">
    <div class="container-fluid">
      <div class="container">
        <div class="text-end">
          <button class="btn btn-dark rounded-pill" @click="openModal(true)">
            新增優惠券
          </button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr class="text-center">
              <th>名稱</th>
              <th>折扣碼</th>
              <th>折扣百分比</th>
              <th>到期日</th>
              <th>是否啟用</th>
              <th>編輯</th>
              <th>刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in coupons" :key="item.id" class="text-center">
              <td>{{ item.title }}</td>
              <td>{{ item.code }}</td>
              <td>{{ item.percent +' %' }}</td>
              <td>{{ item.due_date }}</td>
              <td v-if="item.is_enabled">已啟用</td>
              <td v-else>未啟用</td>
              <td>
                <button
                  class="btn btn-outline-dark rounded-pill"
                  @click="openModal(false, item)"
                >
                  編輯
                </button>
              </td>
              <td class="text-center">
                <button
                  class="btn btn-outline-danger rounded-pill"
                  @click="deleteCoupon(item.id)"
                >
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- pagination -->
        <PagiNation
          :pagination="pagination"
          @getProducts="getCoupons"
        ></PagiNation>
      </div>

      <!-- 新增優惠券 Modal -->
      <div
        class="modal fade"
        id="couponModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content border-0">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <span>新增優惠券</span>
              </h5>
            </div>

            <div class="modal-body row">
              <div class="col-8">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    placeholder="請輸入優惠券名稱"
                    v-model="tempCoupon.title"
                  />
                  <label for="floatingInput">名稱</label>
                </div>
                <div class="col-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="請輸入折扣碼"
                      v-model="tempCoupon.code"
                    />
                    <label for="floatingInput">折扣碼</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="請輸入折扣百分比"
                      v-model="tempCoupon.percent"
                    />
                    <label for="floatingInput">折扣百分比</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="請輸入到期日"
                      v-model="tempCoupon.due_date"
                    />
                    <label for="floatingInput">到期日</label>
                  </div>
                </div>

                <div class="form-check form-switch text-start">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    v-model="tempCoupon.is_enabled"
                  />
                  <label class="form-check-label" for="flexSwitchCheckDefault"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                @click="updateCoupon"
              >
                確認
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PagiNation from "@/components/PagiNation.vue";
import { Modal } from "bootstrap";

export default {
  components: {
    PagiNation,
  },
  data() {
    return {
      pagination: {},
      coupons: [],
      tempCoupon: {},
      myModal: {},
      isNew: false,
    };
  },
  name: "CouponView",
  methods: {
    getCoupons(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/coupons?page=${page}`;
      this.$http.get(api).then((response) => {
        this.coupons = response.data.coupons;
        if (response.data.success) {
          this.products = response.data.products;
          this.pagination = response.data.pagination;
        }
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = {};
        this.isNew = true;
      } else {
        this.tempCoupon = Object.assign({}, item);
        this.isNew = false;
      }
      this.myModal.show();
    },
    updateCoupon() {
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/coupon`;
      let httpMethod = "post";

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/coupon/${this.tempCoupon.id}`;
        httpMethod = "put";
      }

      this.$http[httpMethod](api, { data: this.tempCoupon }).then(
        (response) => {
          console.log("123", response);
          if (response.data.success) {
            this.myModal.hide();
          }
          this.getCoupons();
        }
      );
    },
    deleteCoupon(id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/coupon/${id}`;
      this.$http.delete(url).then(() => {});
      this.getCoupons();
    },
  },
  mounted() {
    this.myModal = new Modal("#couponModal", {});
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (token !== "") {
      this.axios.defaults.headers.common["Authorization"] = token;
      this.getCoupons();
    }
  },
};
</script>
<style>
.container {
  margin-top: 100px;
  border-radius: 10px;
  background-color: white;
  padding: 50px;
}
</style>
