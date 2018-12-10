import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Dashboard.vue";
import VueApexCharts from "vue-apexcharts";

Vue.use(VueApexCharts);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Home
    },
    {
      path: "/UserProfile",
      name: "userprofile",
      component: () => import("./views/UserProfile.vue")
    },
    {
      path: "/maps",
      name: "maps",
      component: () => import("./views/Maps.vue")
    },
    {
      path: "/tablelist",
      name: "tablelist",
      component: () => import("./views/TableList.vue")
    },
    {
      path: "/typography",
      name: "Typography",
      component: () => import("./views/Typography.vue")
    },
    {
      path: "/Icons",
      name: "Icons",
      component: () => import("./views/Icons.vue")
    }
  ]
});
