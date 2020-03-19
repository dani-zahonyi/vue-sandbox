<template>
  <article class="message">
    <div class="message-header">
      <p>{{ title }}</p>
      <button @click="onClose" class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      <slot></slot>
    </div>
  </article>
</template>

<script>
import Vue from 'vue'
const Message = {
  props: {
    title: String,
    onClose: Function
  }
}; 
Vue.component('Message', Message)
export default Message;
</script>
