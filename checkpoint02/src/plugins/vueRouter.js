import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  // { path: "/", redirect: { path: "/bicycle" } },
  // {
  //   path: "/bicycle",
  //   component: () => import("@vue/pages/Bicycle"),
  // },
  // {
  //   path: "/attractions",
  //   component: () => import("@vue/pages/Attractions"),
  // },
  // {
  //   path: "/history",
  //   component: () => import("@vue/pages/History"),
  // },
  {
    path: "/",
    component: () => import("@vue/pages/Main"),
    children: [
      {
        path: "bicycle",
        component: () => import("@vue/pages/Bicycle"),
      },
      {
        path: "attractions",
        component: () => import("@vue/pages/Attractions"),
      },
      {
        path: "history",
        component: () => import("@vue/pages/History"),
      },
    ],
  },
];
const router = new VueRouter({
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  next();
});
router.afterEach((to, from) => {
  window.scroll(0, 0);
});

export default router;
