<template>
  <div id="app">
    <use-template></use-template>
  </div>
</template>

<script>
import UseTemplate from "./view/UseTemplate"
export default {
  name: "App",
  components: { UseTemplate },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
