<template>
  <div class="hello">
    <div class="test">
      <p class="hello">Hello</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "HelloWorld",
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.test {
  width: 320px;
  height: 160px;
  background-color: bisque;
  text-align: center；;
}
.hello {
  color: red;
}
</style>
