<template>
  <div class="container-fluid" style="padding-top: 200px">
    <div class="container customer-card">
      <h3 class="text-center mb-5">聯絡我們</h3>

      <div class="mt-5">
        <p>
          請在聯繫我們之前查看常見問題解答。<br />
          營業時間為工作日的9:00至18:00。請注意，我們無法在周末和節假日等工作時間以外回复。<br />
          如果您在 3 個工作日內沒有收到回复，可能是沒有收到
          FruOats發送的電子郵件。<br />
          請檢查您的垃圾郵件文件夾並確保您可以收到來自“support@fruoats.jp”的電子郵件。
        </p>
        <h5>歡迎來信</h5>
        <h6>support@fruoats.tw</h6>
      </div>
    </div>
    <div class="text-center">
      <router-link to="/"
        ><button
          type="button"
          class="btn btn-outline-light rounded-pill mt-5 fw-bold"
        >
          回到首頁
        </button></router-link
      >
    </div>
  </div>
</template>
<style>
h3 {
  color: #ec6d4e;
  font-weight: 900;
}
h5 {
  color: #ec6d4e;
  font-size: 16pt;
  font-weight: bold;
  margin: 50px 0 20px;
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
  font-size: 15px;
  font-weight: 700;
}
</style>
