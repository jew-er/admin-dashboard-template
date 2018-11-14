<template>
  <div id="app">
    <div class="app-container" :class="{'push-container': pushView}">
      <Navmenu/>
      <div class="view" :class="{'push-view': pushView}">
        <Navtop />
        <transition name="fade">  
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Navmenu from "@/components/Navmenu.vue";
import Navtop from "@/components/Navtop.vue";
import { EventBus } from "./Event.js";
export default {
  components: {
    Navmenu,
    Navtop
  },
  data: function() {
    return {
      pushView: false
    };
  },

  mounted() {
    EventBus.$on("reveal-nav", () => {
      this.pushView = !this.pushView;
    });
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
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

.app-container {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  
}

.view {
  box-sizing: border-box;
  overflow-y: scroll;
  width: 100vw;
  //flex: 1 1 100%;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 800px) {
  .app-container{
    transition: 0.4s ease-in-out;
  }
  .push-container {
     width: calc(100vw + 260px);
     transform: translate(-260px);
   }

}
</style>
