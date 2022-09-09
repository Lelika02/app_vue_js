<template>
  <MonMenu/>
  <router-view></router-view>
  <footer>Mon site vueJs Lelika</footer>
</template>

<script>

  export default {
    name: 'App',
    
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
  footer{
    margin-top: 1em;
    margin-bottom: 1em;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: black;
  }
</style>
