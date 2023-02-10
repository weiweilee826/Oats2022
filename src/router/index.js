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
    path: "/product",
    name: "product",
    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
    children: [
      {
        path: "product_list",
        name: "productList",
        component: () => import("../views/ProductList.vue"),
      },
      // {
      //   path: "order_list",
      //   name: "orderList",
      //   component: () => import("../views/OrderList.vue"),
      // },
      // {
      //   path: "coupon",
      //   name: "couponView",
      //   component: () => import("../views/CouponView.vue"),
      // },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
