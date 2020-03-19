<template>
  <div id="app">
    <Nav :items="navItems" :grouppedItems="grouppedNavItems"/>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "./components/navigation/Nav";
export default {
  name: "app",
  components: {
    Nav
  },
  data: () => ({
    menu: false,
    navItems: [
      { text: "Home", route: "/home" },
      { text: "Hello", route: "/hello" }
    ],
    grouppedNavItems: [
      {
        name: "More",
        items: [
          { text: "Contacts", route: "/contacts" },
          { text: "About", route: "/about" }
        ]
      }
    ]
  }),
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    }
  }
};
</script>

<style>
</style>