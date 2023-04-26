<template>
  <div style="background-color: #ec6d4e">
    <div class="container-fluid">
      <div class="container">
        <table class="table mt-4">
          <thead>
            <tr class="text-center">
              <th>購買時間</th>
              <th>Email</th>
              <th>購買款項</th>
              <th>購買金額</th>
              <th>是否付款</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in orders" :key="item.id" class="text-center">
              <td>{{ item.create_at }}</td>
              <td>{{ item.email }}</td>
              <td class="text-start" v-html="item.product"></td>
              <td class="text-end">{{ $filters.currencyUSD(item.total) }}</td>
              <td v-if="item.is_paid">已付款</td>
              <td v-else>未付款</td>
              <td class="text-center">
                <button
                  class="btn btn-outline-dark rounded-pill"
                  @click="openModal(item)"
                >
                  編輯
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- pagination -->
        <PagiNation
          :pagination="pagination"
          @getProducts="getOrderList"
        ></PagiNation>
      </div>

      <!-- 編輯訂單 Modal -->
      <div
        class="modal fade"
        id="orderModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content border-0">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <span>編輯訂單</span>
              </h5>
            </div>

            <div class="modal-body row">
              <div class="col-8">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingInput"
                    v-model="tempOrder.create_at"
                  />
                  <label for="floatingInput">購買時間</label>
                </div>
                <input type="date" class="form-control" id="date" name="date" v-model="tempOrder.create_at" />
                <div class="col-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      v-model="tempOrder.email"
                    />
                    <label for="floatingInput">Email</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      v-model="tempOrder.product"
                    />
                    <label for="floatingInput">購買款項</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingPassword"
                      v-model="tempOrder.total"
                    />
                    <label for="floatingInput">購買金額</label>
                  </div>
                </div>

                <div class="form-check form-switch text-start">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    v-model="tempOrder.is_paid"
                  />
                  <label class="form-check-label" for="flexSwitchCheckDefault"
                    >是否付款</label
                  >
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                @click="updateOrder"
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
      orders: [],
      pagination: {},
      myModal: {},
      tempOrder: {},
    };
  },
  methods: {
    getOrderList(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/orders?page=${page}`;
      this.$http.get(api).then((response) => {
        console.log("getOrderList",response)
        for (let order of response.data.orders) {
          let myorder = {
            id: order.id,
            create_at: new Date(order.create_at).toLocaleString(),
            email: order.user.email,
            is_paid: order.is_paid,
            total: order.total,
          };

          let str = "";
          for (let product of Object.values(order.products)) {
            str += `${product.product.title} ： ${product.qty}包 <br>`;
          }
          myorder.product = str;
          this.orders.push(myorder);
        }
        this.pagination = response.data.pagination;
      });
    },
    openModal(item) {
      this.tempOrder = Object.assign({}, item);
      console.log('tempOrder',this.tempOrder);
      this.myModal.show();
    },
    updateOrder() {
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/order/${this.tempOrder.id}`;

      this.$http.put(api, { data: this.tempOrder }).then((response) => {
        console.log("updateOrder", response);
        if (response.data.success) {
          this.myModal.hide();
          this.getOrderList();
        }
      });
    },
  },

  mounted() {
    this.myModal = new Modal("#orderModal", {});
  },
  created() {
    this.getOrderList();
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
