<template>
  <div style="background-color: #ec6d4e">
    <img
      class="img-fluid"
      src="../assets/images/about_us/story-contents1.jpg"
      alt=""
    />
    <div class="container-fluid" style="padding-top: 0px">
      <h1 class="title">STORY</h1>
      <div class="container customer-card">
        <p class="text-center mb-5">
          我們是一家開發 Fluoats 的 IT 公司。<br />
          我們有很多案頭工作，所以咖啡和零食很提神，但我們想要維持健康，但又不想放棄零食。<br />
          因此，我們反復進行市場調研和用戶問卷調查，看看能不能開發出既健康又美味的零食。<br />
          然後，結果發現有比預想更多的人有同樣的想法，“你不必忍受的零食”的開發開始了。
        </p>
        <div class="row my-5">
          <div class="col-5 mt-5">
            <img
              class="img-fluid rounded"
              src="../assets/images/about_us/story-contents2.jpg"
              alt=""
            />
          </div>
          <div class="col p-5">
            <h3>專注於膳食纖維</h3>
            <br />
            <p>
              從問卷調查的結果來看，發現關注“膳食纖維”而不是蛋白質和維生素的人多得驚人。
              然而，當我們調查實際情況時，大多數日本人並沒有達到每天推薦的膳食纖維攝入量。<br /><br />
              換句話說，在正常飲食中很難攝入膳食纖維。<br /><br />
              我們反覆考慮任何人都可以輕鬆添加膳食纖維的零食，只用3塊餅乾就可以攝取半天膳食纖維的“FruOats”誕生了。
            </p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col pt-5">
            <h3>僅使用源自植物的簡單材料</h3>
            <br />
            <p>
              為了讓每個人都能享受愉快的零食時間，我們只用簡單的植物來源成分就實現了美味。<br /><br />
              我們不使用餅乾原料中經常使用的麵粉、雞蛋、黃油等動物原料，讓純素者和麩質過敏者都能食用。<br /><br />
              此外，不使用人造甜味劑或防腐劑。<br />
            </p>
          </div>
          <div class="col-5 mt-5">
            <img
              class="img-fluid rounded"
              src="../assets/images/about_us/story-contents3.jpg"
              alt=""
            />
          </div>
        </div>
        <h3>兼顧健康與品味</h3>
        <p>
          為了兼顧健康和美味，如果不使用通常使用的原料，大量添加膳食纖維，做出美味的食物是極其困難的。在獲得過世界冠軍的廚師的監督下，經過幾十個原型，“FruOats”終於完成了。
        </p>
        <div class="text-center" style="margin-top: 100px">
          <p class="fw-bold">監督</p>
          <h4>中山一弘</h4>
          <p class="fw-bold">廚師</p>
        </div>
        <p>
          為了將10克膳食纖維與3片結合起來，用豆渣和燕麥片代替小麥粉和米粉。它具有鬆脆的質地，獨特的組合和烘烤方法。請享用不僅美味，而且可以每天食用以補充膳食纖維的新甜點。
        </p>
        <img
          class="img-fluid"
          src="../assets/images/about_us/story-contents4.jpg"
          alt=""
        />
        <div class="text-center mt-5">
          <p class="fw-bold">監督</p>
          <h4>柳雪菜</h4>
          <p class="fw-bold">註冊營養師</p>
        </div>
        <p>
          由於近年來飲食習慣西化，現代日本人的膳食纖維攝入量持續下降。通過攝取膳食纖維，您可以期待改善腸道環境、使皮膚更清潔、引導節食等幸福效果。此外，經常咀嚼會增加滿足感並有助於防止暴飲暴食。<br /><br />
          忙碌的人可能很難通過蔬菜獲得一天所需的全部膳食纖維，但3份水果可以提供一天所需膳食纖維的1/2。另外，膳食纖維有可溶性和不可溶性兩種，各有不同的作用，所以建議大家均衡攝取，也建議可以攝取膳食纖維。<br /><br />
          水果燕麥的特點是用富含膳食纖維的豆渣粉和燕麥代替小麥粉，用富含礦物質的本若糖（沖繩縣產甘蔗）代替白砂糖。通常缺乏的營養素可以與全燕麥一起美味地攝取。此外，它不使用小麥粉、雞蛋和乳製品，因此小麥過敏、雞蛋過敏和乳製品過敏的人也可以享用。全燕麥是一種美味的餅乾，我絕對會推薦給任何想輕鬆攝取膳食纖維的人。
        </p>
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
  </div>
</template>
<style>
.customer-card {
  position: relative;
  width: 1140px;
  border-radius: 10px;
  background-color: white;
  padding: 100px;
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
  font-size: 26px;
  margin: 50px 0 20px;
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
</style>
