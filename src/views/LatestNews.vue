<template>
  <div style="background-color: #ec6d4e">
    <div class="container-fluid" style="padding-top: 200px">
      <div class="container customer-card">
        <h1 class="title">NEWS</h1>
        <div class="news-content">
          <table class="table text-white mb-0">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody class="news-column">
              <tr class="">
              
                <th scope="row">2023.04.01</th>
                <td>【從4/6開始數量有限】“FruOats”將開始銷售“素食巧克力”！</td>
                <td>
                  <router-link to="/news_post1"
                    ><font-awesome-icon icon="fa-solid fa-chevron-right"
                  /></router-link>
                </td>
                
              </tr>
              <tr>
                <th scope="row">2023.03.21</th>
                <td>發表於2023年3月號的雜誌《Ray》</td>
                <td>
                  <router-link to="/news_post2"
                    ><font-awesome-icon icon="fa-solid fa-chevron-right"
                  /></router-link>
                </td>
              </tr>
              <tr>
                <th scope="row">2023.02.08</th>
                <td scope="row">【重要】運營公司變更、條款修改等通知</td>
                <td>
                  <router-link to="/news_post3"
                    ><font-awesome-icon icon="fa-solid fa-chevron-right"
                  /></router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.customer-card {
  height: 521px;
}
h1 {
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

.customer-card > p {
  color: #ec6d4e;
}
.news-content {
  max-width: 1240px;
  width: 90%;
  margin: 0 auto;
  padding: 0 50px;
}
a {
  text-decoration: none;
  color: white;
}
table {
  margin: 0;
}

</style>
