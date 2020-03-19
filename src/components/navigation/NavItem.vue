<template>
  <a class="navbar-item" v-on:click="onClick">
    <router-link class="link" :to="{ path: this.route}">{{ this.text }}</router-link>
  </a>
</template>
<script>
export default {
  props: {
    text: String,
    route: String,
    onClick: Function
  }
};
</script>
