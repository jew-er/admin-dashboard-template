<template>
  <div id="app">
    <Navmenu/>
    <transition name="fade">
    <router-view/>
    </transition>
  </div>
</template>

<script>
import Navmenu from "@/components/Navmenu.vue";
export default {
  components: {
    Navmenu
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300|Roboto:300");
* {
  margin: 0;
  padding: 0;
  
}
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>
