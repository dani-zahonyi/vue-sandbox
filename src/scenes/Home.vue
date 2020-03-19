<template>
  <div class="container">
    <Message v-if="messageOn" :onClose="closeMessage" title="Alma">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
      <a>felis venenatis</a> efficitur. Aenean ac
      <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
    </Message>
  </div>
</template>

<script>
import Message from "../components/message/Message";
export default {
  data() {
    return {
      messageOn: true
    };
  },
  methods: {
    closeMessage() {
      this.messageOn = false;
    }
  }
};
</script>

<style>
</style>
