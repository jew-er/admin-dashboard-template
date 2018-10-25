import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Dashboard.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Home
    },
    {
      path: "/ursa",
      name: "ursa",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Ursa.vue")
    }
  ]
});
