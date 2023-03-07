import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
    // meta: { requiresAuth: false },
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/ProductsView.vue"),
  },
  {
    //:id>被傳進來的參數
    path: "/product/:id",
    name: "product",
    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/product_list",
    name: "productList",
    component: () => import("../views/ProductList.vue"),
  },
  {
    path: "/order_list",
    name: "orderList1",
    component: () => import("../views/OrderList.vue"),
  },
  {
    path: "/order_list/:id",
    name: "orderList",
    component: () => import("../views/OrderList.vue"),
  },
  {
    path: "/coupon",
    name: "couponView",
    component: () => import("../views/CouponView.vue"),
  },
  {
    path: "/cart",
    name: "shopCart",
    component: () => import("../views/ShopCart.vue"),
  },
  {
    path: "/cart_info",
    name: "CartInfo",
    component: () => import("../views/CartInfo.vue"),
  },

  {
    path: "/customer_term",
    name: "CustomerTerm",
    component: () => import("../views/CustomerTerm.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
