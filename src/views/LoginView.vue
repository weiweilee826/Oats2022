<template>
  <div>
    <div style="background-color: #ec6d4e">
      <div class="container-fluid" style="padding-top: 50px">
        <div class="customer-card container">
          <h3 class="fw-bold text-center">會員登入</h3>
          <form class="form-signin" @submit.prevent="signin">
            <!-- <img
            class="mb-4"
            src="/docs/5.2/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          /> -->
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >電子郵件</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="user.username"
                required
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">密碼</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                v-model="user.password"
                required
              />
              <div id="emailHelp" class="form-text mt-3">
                *如果您在2022年12月31日之前註冊成為會員，請重新設置您的密碼
              </div>
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">記住我</label>
            </div>
            <div class="text-center">
              <button
                class="w-50 btn btn-outline-dark rounded-pill mt-5"
                type="submit"
              >
                開始購物
              </button>
            </div>
          </form>
        </div>
        <div class="customer-card container mt-4">
          <h3 class="fw-bold text-center">註冊會員</h3>
          <div class="text-center">
            <button
              class="w-50 btn btn-outline-dark rounded-pill mt-5"
              type="submit"
            >
              立即加入
            </button>
          </div>
          <div id="emailHelp" class="form-text mt-5">
            *如果您創建了一個帳戶，方便查看您的購買歷史和管理您的訂閱（定期購買）
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    signin() {
      const url = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http.post(url, this.user).then((response) => {
        if (response.data.success) {
          const { token, expired } = response.data;
          document.cookie = `hexToken=${token}; expires=${expired}`;
          this.$router.push("/product_list");
          this.$store.state.adminAccess = true;
        }
      });
      // this.checkUser();
    },
    checkUser() {
      const api = `${process.env.VUE_APP_API}/api/user/check`;
      this.$http.post(api).then((response) => {
        if (response.data.success) {
          this.$store.state.adminAccess = true;
        } else {
          this.$store.state.adminAccess = false;
        }
      });
    },
  },
};
</script>

<style scoped>
h3 {
  color: #ec6d4e;
  font-weight: 900;
}
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
