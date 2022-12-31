<template>
  <div>
    <b-nav pills align="center">
      <b-nav-item>
        <router-link to="/products">產品列表</router-link>
      </b-nav-item>
      <b-nav-item>最新消息</b-nav-item>
      <b-nav-item>熱銷商品</b-nav-item>
      <b-nav-item>
        <router-link to="/">logo</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/login">登入</router-link>
      </b-nav-item>
      <b-nav-item>購物車</b-nav-item>
      <!-- <b-nav-item disabled>購物車</b-nav-item> -->
    </b-nav>

    <!-- <nav class="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company</a>
      <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
            登出
          <router-link to="/">登出</router-link>
        </li>
      </ul>
    </nav> -->
  </div>
</template>

<script>
export default {};
</script>
