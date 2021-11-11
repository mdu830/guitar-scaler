<template>
    <welcomePage msg="The best place to visualize your scales and advance your skills"/>
</template>

<script>
import welcomePage from './components/welcomePage.vue'

export default {
  name: 'App',
  components: {
    welcomePage
  }
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
body {
background: linear-gradient(
  90deg,
  rgb(54, 54, 66) 1%, 
  rgba(7,7,28) 8%, 
  rgba(7,7,28) 92%, 
  rgb(54, 54, 66) 98%);
}
</style>
