<template>

    <div class="container content">
      <div class="product-content rounded">
        <div class="row">
          <!-- product info -->
          <div class="col product-img">
            <img class="float-start img-fluid" :src="product.imageUrl" alt="" />
          </div>
          <div class="col text-start mb-5">
            <h4 class="fw-bold">{{ product.title }}</h4>
            <h5 class="mt-3">{{ $filters.currencyUSD(product.price) }}</h5>
            <select
              class="form-select my-4"
              aria-label="Default select example"
              v-model.number="qty"
            >
              <option v-for="index in 10 - foundCartProd.qty" :key="index">
                {{ index }}
              </option>
            </select>
            <button
              class="btn btn btn-outline-light checkout"
              @click="addToCart()"
            >
              加入購物車
            </button>
            <div class="my-4">
              <p>
                【有效期限】發貨日起約4至6週 <br />
                【外箱尺寸】310 x226 x23 公分<br />
                【送貨方式】下單後兩天出貨（不包含週末和例假日）<br />
                【包裝】單獨包裝<br />
                【運費】含運<br />
                【保存方法】避免陽光直射（夏季建議冷藏或冷凍保存）
              </p>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button"
                    :class="{ collapsed: accordion }"
                    @click="toggleActive"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    + 原料
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse"
                  :class="{ collapse: accordion }"
                  @click="toggleActive"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    {{ product.description }}
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button"
                    :class="{ collapsed: accordion_cnt }"
                    @click="toggleCnt"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    + 營養成分
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse"
                  :class="{ collapse: accordion_cnt }"
                  @click="toggleCnt"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    {{ product.content }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- product info end-->

          <hr />

          <!-- biscuit feature -->
          <div
            class="biscuit_feature"
            v-if="product.title && !product.title.includes('限量')"
          >
            <div class="text-center my-5">
              <img
                class="img-fluid rounded mb-4"
                src="../assets/images/icons/oats_logo_color.svg"
                alt=""
              />
              <h4>承諾和美味的秘密</h4>
            </div>
            <div>
              <img
                class="img-fluid rounded mb-5"
                src="../assets/images/products/intro/intro_05.jpg"
                alt=""
              />
              <br />
              <h4>素食認證！裝滿超級食物的餅乾</h4>
              <br />
              <p>
                燕麥片、豆渣粉、奇亞籽、亞麻籽、乾果、米油和其他植物來源的超級食品被緊密地包裝在一個餅乾中。<br /><br />
                我們不使用糖果中常用的雞蛋、黃油、麵粉或白糖，因此純素食者和麩質過敏者可以放心享用。<br />
                此外，我們不使用商業產品中經常使用的人造甜味劑或防腐劑。
              </p>
            </div>
            <div class="row my-5">
              <div class="col-5 mt-5">
                <img
                  class="img-fluid rounded"
                  src="../assets/images/products/intro/intro_02.jpg"
                  alt=""
                />
              </div>
              <div class="col p-5">
                <h4>卡路里和糖分！膳食纖維約20倍！</h4>
                <br />
                <p>
                  與普通餅乾相比，營養價值一目了然！它的糖分低，富含膳食纖維，所以即使是關心自己健康的人也可以享受零食時間。<br /><br />
                  ・卡路里減少約23%<br />
                  ・糖分減少約47%<br />
                  ・脂肪減少約29%<br />
                  ・膳食纖維增加約20倍<br />
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col pt-5">
                <h4>一天吃3片，就能攝取1/2的膳食纖維！</h4>
                <br />
                <p>
                  大多數人缺乏膳食纖維，20 多歲和 30 多歲的男性和女性平均缺乏約
                  6g。只需3片水果燕麥（約40克），就能獲得一天所需膳食纖維的一半。這相當於
                  10 根香蕉。
                </p>
              </div>
              <div class="col-5 mt-5">
                <img
                  class="img-fluid rounded"
                  src="../assets/images/products/intro/intro_03.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="row my-5">
              <div class="col-5 mt-5">
                <img
                  class="img-fluid rounded"
                  src="../assets/images/products/intro/intro_06.jpg"
                  alt=""
                />
              </div>
              <div class="col p-5">
                <h4>脆脆的質地！即使安排也好吃</h4>
                <br />
                <p>
                  由於不使用雞蛋、黃油或麵粉，您可以享受到燕麥片和豆渣粉特有的鬆脆口感。<br /><br />
                  它具有乾果的天然甜味，適合搭配普通食物。<br />
                  早餐建議泡在燕麥奶或豆漿裡，或者淋上豆漿酸奶。點心時間搭配咖啡或茶也很美味。
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col pt-5">
                <h4>在咖啡館的聖地清澄白河製造！</h4>
                <br />
                <p>
                  我們在白川清澄的共享辦公室的咖啡館“Kraft Coffee”開發了
                  Fluoats。這家咖啡廳還登上了 Shobunsha 的“東京最佳咖啡廳”（2021
                  年 9 月 14 日出版）。<br /><br />
                  2022年3月，FruOats工廠和直營店“FruOats
                  FACTORY”將在白川清澄開業，從製造、管理到銷售全部在“FruOats
                  FACTORY”完成。
                </p>
              </div>
              <div class="col-5 mt-5">
                <img
                  class="img-fluid rounded"
                  src="../assets/images/products/intro/intro_01.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!-- biscuit feature end-->

          <!-- choco feature -->
          <div class="choco_feature" v-else>
            <div class="text-center my-5">
              <img
                class="img-fluid rounded mb-4"
                src="../assets/images/icons/oats_logo_color.svg"
                alt=""
              />
              <h4>
                限量純素巧克力<br />
                作為關愛身體的禮物及自己的獎勵
              </h4>
            </div>
            <div>
              <img
                class="img-fluid rounded mb-5"
                src="../assets/images/products/choco_04.jpg"
                alt=""
              />
              <br />
              <h4>獎勵令人身心愉悅的純素巧克力</h4>
              <br />
              <p>
                FruOats
                現在提供數量有限的純素巧克力，富含膳食纖維和蛋白質等營養素。<br />
                果乾被大量使用，並以簡單的植物來源材料製成，能享受既美味又健康的甜點。
              </p>
            </div>
            <div class="row my-5">
              <div class="col-5 mt-5">
                <img
                  class="img-fluid rounded"
                  src="../assets/images/products/choco_05.jpg"
                  alt=""
                />
              </div>
              <div class="col p-5">
                <h4>沒有乳製品，沒有小麥，沒有堅果</h4>
                <br />
                <p>
                  為了讓任何人都能安心享用，我們處理了巧克力中常見的三種過敏原。即使您想吃巧克力但不能吃也可以享受它。
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col pt-5">
                <h4>大約1/2份的膳食纖維!<br />"蔓越莓可可粒"</h4>
                <br />
                <p>
                  可以品嚐到酸甜微苦的優雅口感的“蔓越莓可可豆粒”，1個可以攝取約一半的膳食纖維（4g）。作為超級食品而備受矚目的可可粒含有豐富的礦物質和膳食纖維等營養成分，據說具有放鬆身心的效果。可可含量約為50%。
                </p>
              </div>
              <div class="col-5 mt-5">
                <img
                  class="img-fluid rounded"
                  src="../assets/images/products/cranberry_choco_03.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="row my-5">
              <div class="col-5 mt-5">
                <img
                  class="img-fluid rounded"
                  src="../assets/images/products/mango_coconut_choco_02.jpg"
                  alt=""
                />
              </div>
              <div class="col p-5">
                <h4>你可以獲得4克蛋白質！“芒果椰子”</h4>
                <br />
                <p>
                  “芒果椰子”讓您盡享熱帶風味和膨化大豆的酥脆口感，可攝取超過4克的蛋白質。打造美麗肌膚和秀發的蛋白質是容易缺乏的營養物質，因此推薦給正在運動的人和注重美容的人。可可含量約34%
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col pt-5">
                <h4>作為送給特別的人的禮物</h4>
                <br />
                <p>
                  “純素巧克力”是送給關心自己身體的人的完美禮物。每顆巧克力都包裹在
                  FruOats 原裝限量包裝中。此外，還免費贈送便於攜帶的原創紙袋。
                </p>
              </div>
              <div class="col-5 mt-5">
                <img
                  class="img-fluid rounded"
                  src="../assets/images/products/choco_06.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!-- choco feature end-->
        </div>
      </div>
    </div>

</template>

<script>
import { getProduct, addToCart, getCart, deleteCart } from "@/js/api.js";

export default {
  name: "ProductView",
  components: {},
  data() {
    return {
      id: this.$route.params.id,
      product: { imageUrl: "", price: 0 },
      myModal: {},
      isNew: false,
      status: {
        fileUploading: false,
      },
      qty: 1,
      accordion: true,
      accordion_cnt: true,
      carts: [],
    };
  },
  methods: {
    async addToCart() {
      if (this.foundCartProd) deleteCart(this.foundCartProd.id);
      if (await addToCart(this.id, this.foundCartProd.qty + this.qty)) {
        this.getCart();
      }
    },
    async getCart() {
      this.carts = await getCart();
      this.$store.state.cartNum = this.carts.length;
    },
    toggleActive() {
      this.accordion = !this.accordion;
    },
    toggleCnt() {
      this.accordion_cnt = !this.accordion_cnt;
    },
  },
  computed: {
    // 找購物車中同商品資料
    foundCartProd() {
      let found = this.carts.find(({ product_id }) => product_id == this.id);
      return found ? found : { id: 0, qty: 0 };
    },
  },
  async created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.axios.defaults.headers.common["Authorization"] = token;
    this.product = await getProduct(this.id);
    this.getCart();
  },
};
</script>
<style>
.content {
  margin-top: 50px;
  background-color: #ec6d4e;
  padding-top: 100px;
}
.product-content {
  background-color: #fff;
  justify-content: space-between;
  padding: 100px 180px;
}
.product-img {
  width: 456px;
}
.line {
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(43, 43, 43, 0.15);
}
h4 {
  color: #ec6d4e;
  font-weight: 700;
}
p {
  font-weight: 500;
}
.accordion {
  /* --bs-accordion-btn-color: ghostwhite;
  --bs-accordion-btn-bg: pink; */
  --bs-accordion-active-color: #fff;
  --bs-accordion-active-bg: #ec6d4e;
}
.checkout {
  width: 100%;
  height: 50px;
  color: #fff;
  font-weight: bold;
  background-color: #ec6d4e;
}
.checkout:hover {
  color: #fff;
  background-color: #ec6d4e;
  border: 2px solid #fff;
}
h5 {
  font-weight: 900;
}
</style>
