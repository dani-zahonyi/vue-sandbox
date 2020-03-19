<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="link" :to="{ path: '/home'}">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
      </router-link>
      <a
        v-on:click="toggleMenu"
        role="button"
        class="navbar-burger burger"
        v-bind:class="{ 'is-active': menu }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active': menu }">
      <div class="navbar-start">
        <nav-item
          v-for="item in items"
          :key="item.text"
          :text="item.text"
          :route="item.route"
          :onClick="toggleMenu"
        />
        <div
          v-for="group in grouppedItems"
          :key="group.name"
          div
          class="navbar-item has-dropdown is-hoverable"
        >
          <a class="navbar-link">{{ group.name }}</a>

          <div class="navbar-dropdown">
            <nav-item
              v-for="item in group.items"
              :key="item.text"
              :text="item.text"
              :route="item.route"
              :onClick="toggleMenu"
            />
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavItem from "./NavItem";
export default {
  components: {
    NavItem
  },
  props: {
    items: Array,
    grouppedItems: Array
  },
  data: () => ({
    menu: false
  }),
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>
