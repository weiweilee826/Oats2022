<template>
  <div>
    <nav
      class="navbar navbar-expand-lg fixed-top"
      aria-label="Thirteenth navbar example"
    >
      <div class="container-fluid">
        <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <ul class="navbar-nav col-4">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
                <router-link to="/products">所有商品</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><router-link to="/coupon">優惠券</router-link></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link">關於我們</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">最新消息</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">店家資訊</a>
            </li>
          </ul>

          <a class="navbar-brand me-0 justify-content-lg-center col-4" href="#"
            ><router-link to="/"
              ><img
                src="../assets/images/icons/oats_logo.svg"
                alt="" /></router-link
          ></a>
          <div
            class="d-lg-flex col-lg-4 justify-content-lg-end btn_color col-4"
          >
            <button type="button" class="btn">
              <router-link to="/login">登入</router-link>
            </button>
            <button type="button" class="btn-cart">
              <router-link to="/cart"
                ><font-awesome-icon icon="fa-solid fa-cart-shopping" />
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
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
  margin-bottom: 100px;
}
.nav-link {
  color: white;
  background-color: #ec6d4e;
}
.btn {
  color: white;
}
.btn-cart {
  background-color: #fff;
  border-radius: 100px;
  width: 50px;
  height: 50px;
  border: none;
  color: #ec6d4e;
}
</style>
