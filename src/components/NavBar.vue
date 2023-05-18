<template>
  <div>
    <nav
      class="navbar navbar-expand-lg fixed-top"
      aria-label="Thirteenth navbar example"
    >
      <div class="container-fluid">
        <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <!-- customer -->
          <ul class="navbar-nav col-4" v-if="!$store.state.adminAccess">
            <li class="nav-item">
              <router-link class="nav-link" to="/products"
                >所有商品</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about_us"
                >品牌故事</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/latest_news"
                >最新消息</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shop_info"
                >店鋪資訊</router-link
              >
            </li>
          </ul>

          <!-- admin -->
          <ul class="navbar-nav col-4" v-else>
            <li class="nav-item">
              <router-link class="nav-link" to="/product_list"
                >商品列表</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/order_list"
                >訂單列表</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/coupon">優惠券</router-link>
            </li>
          </ul>
          <!-- logo -->
          <a
            class="text-center navbar-brand me-0 justify-content-lg-center col-4"
            href="#"
            ><router-link class="nav-link" to="/" replace
              ><img
                src="../assets/images/icons/oats_logo.svg"
                alt="" /></router-link
          ></a>

          <!-- customer -->
          <div
            class="d-lg-flex col-lg-4 justify-content-lg-end btn_color col-4"
            v-if="!$store.state.adminAccess"
          >
            <button type="button" class="btn">
              <router-link class="nav-link" to="/login">登入</router-link>
            </button>
            <button type="button" class="btn">
              <router-link to="/cart"
                ><font-awesome-icon
                  icon="fa-solid fa-cart-shopping"
                  style="color: #fff"
                />
                <span
                  v-if="this.$store.state.cartNum"
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"
                >
                  {{ this.$store.state.cartNum }}
                </span>
              </router-link>
            </button>
          </div>
          <!-- admin -->
          <div
            class="d-lg-flex col-lg-4 justify-content-lg-end btn_color col-4"
            v-else
          >
            <button type="button" class="btn" @click="logout">
              <router-link to="/">登出</router-link>
            </button>
            <!-- <button type="button" class="btn">
              <font-awesome-icon icon="fa-solid fa-user" />
            </button> -->
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      const url = `${process.env.VUE_APP_API}/logout`;
      this.$http.post(url).then((response) => {
        if (response.data.message == "已登出") {
          this.$router.push("/");
          this.$store.state.adminAccess = false;
        }
      });
    },
    checkUser() {
      const api = `${process.env.VUE_APP_API}/api/user/check`;
      this.$http.post(api).then((response) => {
        this.$store.state.adminAccess = response.data.success;
      });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      this.$http.get(url).then((response) => {
        this.$store.state.cartNum = response.data.data.carts.length;
      });
    },
  },
  created() {
    this.checkUser();
    this.getCart();
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 40px;
  background-color: #ec6d4e;
}
.nav-link {
  color: white;
  background-color: #ec6d4e;
}
.btn {
  color: white;
}
span {
  margin: 40px 0 0 -60px;
}
</style>
