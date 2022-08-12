<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
export default {
    name: "App",
    components: { Header }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:500,700);

*, *::before, *::after {
  box-sizing: border-box;
}

#app {
  padding: 20px;
  color: #435757;
  background: linear-gradient(-20deg, #d0b782 20%, #a0cecf 80%);
  font: 500 1.2em/1.2 'Roboto', sans-serif;
  min-height: 100vh;
}
</style>
