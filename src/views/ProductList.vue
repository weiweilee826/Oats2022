<template>
  <div style="background-color: #ec6d4e">
    <div class="container-fluid">
      <div class="container">
        <loading v-model="isLoading" />
        <div class="text-end">
          <button class="btn btn btn-outline-dark" @click="getProducts">
            新增商品
          </button>
        </div>
        <table class="table mt-4">
          <thead>
            <tr>
              <th width="10%"></th>
              <th width="20%">商品</th>
              <th>原價</th>
              <th>售價</th>
              <th>是否啟用</th>
              <th>編輯</th>
              <th>刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>
                <img class="img-fluid rounded" :src="item.imageUrl" alt="" />
              </td>
              <td class="text-start">
                {{ item.title }}
              </td>
              <td class="text-end" v-if="item.origin_price !== undefined">
                {{ $filters.currencyUSD(item.origin_price) }}
              </td>
              <td class="text-end" v-else>{{ $filters.currencyUSD(0) }}</td>

              <td class="text-end" v-if="item.price !== undefined">
                {{ $filters.currencyUSD(item.price) }}
              </td>
              <td class="text-end" v-else>{{ $filters.currencyUSD(0) }}</td>
              <td>
                <span v-if="item.is_enabled" class="text-success">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal(false, item)"
                >
                  編輯
                </button>
              </td>
              <td>
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal(false, item)"
                >
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- 新增商品modal -->
        <div
          class="modal fade"
          id="productModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content border-0">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  <span>商品資訊</span>
                </h5>
              </div>

              <div class="modal-body row">
                <div class="col-4">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      v-model="tempProduct.imageUrl"
                    />
                    <label for="floatingInput">圖片網址</label>
                  </div>
                  <input
                    type="file"
                    class="form-control"
                    id="inputGroupFile01"
                    ref="files"
                    @change="uploadFile($event)"
                  />
                  <img
                    class="img-fluid mt-3"
                    :src="tempProduct.imageUrl"
                    alt=""
                  />
                </div>

                <div class="col-8">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="請輸入商品名稱"
                      v-model="tempProduct.title"
                    />
                    <label for="floatingInput">商品</label>
                  </div>
                  <div class="col-6">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="請輸入單位"
                        v-model="tempProduct.unit"
                      />
                      <label for="floatingInput">單位</label>
                    </div>

                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="請輸入原價"
                        v-model="tempProduct.origin_price"
                      />
                      <label for="floatingInput">原價</label>
                    </div>

                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="請輸入售價"
                        v-model="tempProduct.price"
                      />
                      <label for="floatingInput">售價</label>
                    </div>
                  </div>

                  <div class="form-floating mb-3">
                    <textarea
                      class="form-control"
                      placeholder="請輸入原料標示"
                      id="floatingTextarea"
                      v-model="tempProduct.description"
                      style="height: 100px"
                    ></textarea>
                    <label for="floatingTextarea">原料標示</label>
                  </div>

                  <div class="form-floating mb-3">
                    <textarea
                      class="form-control"
                      placeholder="請輸入營養標示"
                      id="floatingTextarea"
                      v-model="tempProduct.content"
                      style="height: 100px"
                    ></textarea>
                    <label for="floatingTextarea">營養標示</label>
                  </div>

                  <div class="form-check form-switch text-start">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      v-model="tempProduct.is_enabled"
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
                  @click="updateProduct"
                >
                  確認
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      myModal: {},
      isNew: false,
      isLoading: false,
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
          console.log(response);
          this.products = response.data.products;
        }
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        this.isNew = true;
      } else {
        this.tempProduct = Object.assign({}, item);
        this.isNew = false;
      }
      this.myModal.show();
    },
    updateProduct() {
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/product`;
      let httpMethod = "post";

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/product/${this.tempProduct.id}`;
        httpMethod = "put";
      }

      this.$http[httpMethod](api, { data: this.tempProduct }).then(
        (response) => {
          if (response.data.success) {
            this.myModal.hide();
            this.getProducts();
          } else {
            this.getProducts();
            console.log("新增失敗");
          }
          this.products = response.data.products;
        }
      );
    },
    uploadFile(data) {
      // const vm = this;
      // console.log(1, this);
      const uploadedFile = data.target.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", uploadedFile);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/upload`;
      this.$http
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.success) {
            // vm.$set(this.tempProduct, "imageUrl", response.data.imageUrl); << vue 2
            this.tempProduct.imageUrl = response.data.imageUrl; //<< vue 3
          }
        });
    },
  },
  mounted() {
    this.myModal = new Modal("#productModal", {});
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (token !== "") {
      this.axios.defaults.headers.common["Authorization"] = token;
      this.getProducts();
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
