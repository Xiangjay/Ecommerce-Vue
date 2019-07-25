<template>
<div>
  <div class="overlay" v-bind:class="{'overlay-show':mdShow}">
    <div class="overlay-top">
      <button class="overlay-close" @click="closeOverlay()">Close</button>
    </div>
    <div class="overlay-content">
      <slot name="message"></slot>
      <div>
        <slot name="btnGroup"></slot>
      </div>
    </div>
  </div>
  <div class="overlay-shandow" v-if="mdShow||mdShowCart" @click="closeOverlay()"></div>
</div>
</template>
<script>
import './../assets/css/overlay.css'
export default {
  props: ["mdShow", "mdShowCart"],
  data() {
    return {
      msg: 'hello vue'
    }
  },
  methods: {
    closeOverlay() {
      this.$emit("close");
    }
  }
}
</script>
