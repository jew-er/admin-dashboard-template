<template>  
    <div v-bind:style="{'background-image': 'url('+ bgpaths[0]+ ')'}" class="nav" :class="{'nav-reveal': navReveal}">     
            <div class="logo" v-on:click="hide"> <Iconic icon="magnet" fill="springgreen" /> Vue Template </div>
            <router-link to="/">
              <div :class="{'disable-click': !navReveal}" v-on:click="hide">
                <Iconic width="30px" height = "30px" fill="white" icon="home"/>
                <p>Dashboard</p>
              </div>
            </router-link>
            <router-link to="/UserProfile">
              <div :class="{'disable-click': !navReveal}" v-on:click="hide">
                <Iconic width="30px" height = "30px" fill="white" icon="user-3"/>
                <p>User Profile</p>
              </div>
            </router-link>
            <router-link to="/Maps">
              <div :class="{'disable-click': !navReveal}" v-on:click="hide">
                <Iconic width="30px" height = "30px" fill="white" icon="map-1"/>
                <p>Maps</p>
              </div></router-link>
            <router-link to="/tablelist">
              <div :class="{'disable-click': !navReveal}" v-on:click="hide">
                <Iconic width="30px" height = "30px" fill="white" icon="windows-4"/>
                <p>Table List</p>
              </div>
            </router-link>
      </div>
</template>

<script>
import { EventBus } from "../Event.js";
export default {
  name: "Navmenu",
  data: function() {
    return {
      bgpaths: [
        "img/backgrounds/bg.jpg",
        "img/backgrounds/bg2.jpg",
        "img/backgrounds/bg3.jpg",
        "img/backgrounds/bg4.jpg",
        "img/backgrounds/bg5.jpg",
        "img/backgrounds/bg6.jpg",
        "img/backgrounds/bg7.jpg",
        "img/backgrounds/bg8.jpg",
        "img/backgrounds/bg9.jpeg"
      ],
      navReveal: false
    };
  },
  mounted() {
    EventBus.$on("reveal-nav", () => {
      this.navReveal = !this.navReveal;
    });
  },
  methods: {
    hide: function() {
      //if (window.innerWidth < 800)
      console.log(window.innerWidth);
      console.log("NAVMENU HIDE");
      EventBus.$emit("reveal-nav");
    }
  }
};
</script>

<style lang="scss">
.nav {
  width: 260px;
  min-width: 260px;
  height: 100vh;
  background-size: cover;
  background-position: 50% 50%;
  color: white;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  z-index:0;

  .logo {
    border-bottom: 1px solid rgba(209, 185, 185, 0.5);
    width: 220px;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    box-sizing: border-box;
    padding-right: 60px;
    z-index:2;
  }
  a {
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    color: white;
    text-decoration: none;
    margin: 2px;
    font-size: 0.8em;
    text-transform: uppercase;
    z-index:2;

    &.router-link-exact-active {
      color: springgreen;

      div {
        background: rgba(255, 255, 255, 0.3);
      }

      div:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }

    & div {
      width: 200px;
      padding: 15px;
      border-radius: 5px;
      display: flex;
      padding-left: 25px;
      justify-content: flex-start;
      align-items: center;
      transition: background 0.1s ease-in;
      p {
        margin-left: 15px;
      }
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.6;
    z-index: -1;
    object-fit: cover;
    pointer-events: none;
  }
}

@media only screen and (max-width: 800px) {
  .nav {
    width: 0;
    min-width: 0;
    order: 1;
    z-index: 5;
    transition: 0.4s ease-in-out;
  }

  .nav-reveal {
    min-width: 260px;
    width: 260px;
  }

  .disable-click {
    pointer-events: none;
  }
}

@media only screen and (max-height: 400px) {
  .nav {
    overflow-y: scroll;
  }
}
</style>
