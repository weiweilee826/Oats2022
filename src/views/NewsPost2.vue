<template>
  <div style="background-color: #ec6d4e">
    <div class="container-fluid" style="padding-top: 200px">
      <div class="container customer-card">
        <h3 class="mb-1">發表於2023年3月號的雜誌《Ray》</h3>
        <p>2023.03.21</p>
        <div class="mt-5">
          <img class="img-fluid" src="../assets/images/news/Ray.jpg" alt="" />
          <p>FruOats 在 2023 年 3 月 22 日發行的“Ray”月刊中有介紹。</p>
        </div>
      </div>
      <div class="text-center">
        <router-link to="/latest_news"
          ><button
            type="button"
            class="btn btn-outline-light btn-lg rounded-pill mt-5 fw-bold"
          >
            最新消息
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>
<style>
h3 {
  color: #ec6d4e;
  font-weight: 900;
  padding: 20px 0;
}
button {
  width: 250px;
}
.customer-card {
  width: 950px;
  border-radius: 10px;
  background-color: white;
  padding: 100px;
}
p {
  font-weight: 700;
  line-height: 2;
}
img {
  padding: 20px 0;
}
.customer-card > p {
  color: #ec6d4e;
}
</style>
