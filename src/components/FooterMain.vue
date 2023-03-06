<template>
  <div class="container-fluid" style="background-color: #ec6d4e">
    <!-- <footer
      class="d-flex flex-wrap justify-content-between align-items-start py-6"
    > -->
    <footer>
      <div class="d-flex justify-content-start">
        <ul class="nav col d-flex">
          <li class="nav-item">
            <a class="nav-link" href="#">常見問題</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">服務條款</a>
          </li>

          <li class="nav-item">
            <a class="nav-link">聯絡我們</a>
          </li>
        </ul>
      </div>

      <div class="d-flex justify-content-start">
        <div class="col d-flex align-items-center">
          <a href="#">
            <router-link to="/"
              ><img
                class="footer_logo"
                src="../assets/images/icons/oats_logo_footer.svg"
                alt=""
            /></router-link>
          </a>
          <p class="mb-3 mb-md-0 text-white">&copy; 2022 FruOats</p>
        </div>

        <ul class="nav col justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-muted" href="#">
              <img src="../assets/images/icons/twitter_logo.svg" alt="" />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#"
              ><img src="../assets/images/icons/instagram_logo.svg" alt=""
            /></a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* .footer_box {
  margin-top: 100px;
  background-color: #ec6d4e; 
}*/
footer {
  padding: 40px 30px 40px 40px;
  background-color: #ec6d4e;
  color: #fff;
}

.footer_logo {
  display: block;
  width: 85px;
  margin-right: 25px;
  opacity: 0.5;
}
.text-white {
  opacity: 0.5;
  font-size: 12px;
}
</style>
