<template>
  <div style="background-color: #ec6d4e">
    <div class="container-fluid" style="padding-top: 100px">
      <h1 class="title">SHOP</h1>
      <div class="container customer-card">
        <img
          class="img-fluid rounded"
          src="../assets/images/shop_loaction.jpg"
          alt=""
        />
        <div class="shop-info">
          <h3 class="text-center">FruOats FACTORY</h3>
          <hr />
          <dl>
            <dt>營業時間</dt>
            <dd>週一至週日（週三除外）11:00-17:00</dd>
          </dl>
          <dl>
            <dt>商店地址</dt>
            <dd>台北市大安區敦化南路一段270巷19號</dd>
          </dl>
          <dl>
            <dt>大眾交通</dt>
            <dd>
              忠孝復興站3號出口 步行約7分鐘<br />
              忠孝敦化站5號出口 步行約8分鐘
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.customer-card {
  position: relative;
  width: 950px;
  border-radius: 10px;
  background-color: white;
  padding: 0px;
}
h1 {
  /* font-family: futura-pt, sans-serif; */
  font-weight: 500;
  font-style: normal;
  font-size: 50px;
  line-height: 1;
  letter-spacing: 10px;
  color: #fff;
  text-align: center;
  margin: 0px auto 60px;
  padding-top: 100px;
  overflow: hidden;
}
h3 {
  color: #ec6d4e;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 50px;
}
h4 {
  font-weight: 700;
  font-size: 32px;
}
p {
  font-size: 16px;
  line-height: 1.9;
  font-weight: 700;
}
img {
  padding: 0px;
}
.shop-info {
  max-width: 700px;
  margin: 0 auto;
  padding: 50px 20px 100px;
}
dl {
  display: flex;
}
dt {
  font-weight: 900;
  padding-right: 20px;
}
dd {
  font-weight: 700;
}
</style>
