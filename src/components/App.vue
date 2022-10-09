<template>
  <div class="router">
    <h1>Application</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, h, onMounted } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    onMounted(() => {
      console.log('Yellow')
    })
    return () => {
      return h('h1', 'Naruto has come');
    }
  }
})
</script>

<style lang="scss">
body {
  background: lightblue;
  h1 {
    color: darkcyan;
  }
}
</style>
