import Vue from "vue";
import Router from "vue-router";
import Home from "../scenes/Home";
import HelloWorld from "../scenes/HelloWorld";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      redirect: "/home"
    },

    {
      path: "/home",
      component: Home,
      props: route => ({ name: route.query.name })
    },

    {
      path: "/hello",
      component: HelloWorld,
      props: route => ({ name: route.query.name })
    }
  ]
});
