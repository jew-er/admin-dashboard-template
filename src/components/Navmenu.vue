<template>
  <div
    v-bind:style="{'background-image': 'url('+ bgpaths[bgImgIndex]+ ')'}"
    class="nav"
    :class="{'nav-reveal': navReveal}"
  >
    <div class="nav-contents" :style="{'background': colorChoices[bgOverlayIndex]}">
      <div class="logo" v-on:click="hide">
        <Iconic icon="magnet" fill="springgreen"/>Vue Template
      </div>
      <router-link to="/">
        <div :class="{'disable-click': !navReveal}" v-on:click="hide">
          <Iconic width="30px" height="30px" fill="white" icon="home"/>
          <p>Dashboard</p>
        </div>
      </router-link>
      <router-link to="/UserProfile">
        <div :class="{'disable-click': !navReveal}" v-on:click="hide">
          <Iconic width="30px" height="30px" fill="white" icon="user-3"/>
          <p>User Profile</p>
        </div>
      </router-link>
      <router-link to="/typography">
        <div :class="{'disable-click': !navReveal}" v-on:click="hide">
          <Iconic width="30px" height="30px" fill="white" icon="document"/>
          <p>Typography</p>
        </div>
      </router-link>
      <router-link to="/Maps">
        <div :class="{'disable-click': !navReveal}" v-on:click="hide">
          <Iconic width="30px" height="30px" fill="white" icon="map-1"/>
          <p>Maps</p>
        </div>
      </router-link>
      <router-link to="/tablelist">
        <div :class="{'disable-click': !navReveal}" v-on:click="hide">
          <Iconic width="30px" height="30px" fill="white" icon="windows-4"/>
          <p>Table List</p>
        </div>
      </router-link>
      <router-link to="/Icons">
        <div :class="{'disable-click': !navReveal}" v-on:click="hide">
          <Iconic width="30px" height="30px" fill="white" icon="diamond"/>
          <p>Icons</p>
        </div>
      </router-link>
      <router-link to="/Notifications">
        <div :class="{'disable-click': !navReveal}" v-on:click="hide">
          <Iconic width="30px" height="30px" fill="white" icon="notification"/>
          <p>Notifications</p>
        </div>
      </router-link>
    </div>
    <div class="optionsbtn" @click="toggleOptions">
      <Iconic width="30px" height="30px" fill="white" icon="settings-4"/>
    </div>
    <transition name="slide-fade">
      <ul class="options" v-if="navoptions">
        <li class="title">
          <b>Filters</b>
        </li>
        <li class="bg-overlay">
          <div
            class="colOption"
            :class="{'active': bgOverlayIndex===key}"
            v-for="(i,key) in colorChoices"
            v-bind:key="key"
            v-bind:style="{'background': i}"
            @click="handleOverlay(key)"
          ></div>
        </li>
        <li class="title">
          <b>Images</b>
        </li>
        <li class="bg-imgs">
          <div
            class="imgOption"
            :class="{'active':bgImgIndex === key}"
            v-for="(i,key) in bgpaths"
            :key="key"
            v-bind:style="{'background-image': 'url('+ i + ')'}"
            @click="handleImage(key)"
          ></div>
        </li>
      </ul>
    </transition>
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
      navReveal: false,
      navoptions: false,
      colorChoices: [
        "rgba(0,0,0,0.7)",
        "rgba(150,0,150,0.4)",
        "rgba(200,0,0,0.4)",
        "rgba(0,155,36,0.4)",
        "rgba(0,0,155,0.7)",
        "rgba(0,70,155,0.4)"
      ],
      bgOverlayIndex: 0,
      bgImgIndex: 0
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
      EventBus.$emit("reveal-nav");
    },
    toggleOptions: function() {
      this.navoptions = !this.navoptions;
    },
    handleOverlay(e) {
      this.bgOverlayIndex = e;
    },
    handleImage(e) {
      this.bgImgIndex = e;
    }
  }
};
</script>

<style lang="scss">
$options-w: 350px;
.nav {
  width: 260px;
  min-width: 260px;
  height: 100vh;
  background-size: cover;
  background-position: 50% 50%;
  overflow: hidden;
  z-index: 9990;
  .nav-contents {
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: white;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
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
      z-index: 2;
    }
    a {
      font-weight: bold;
      font-family: "Roboto", sans-serif;
      color: white;
      text-decoration: none;
      margin: 2px;
      font-size: 0.8em;
      text-transform: uppercase;
      z-index: 2;

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

  .optionsbtn {
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    color: white;
    right: 17px;
    top: 150px;
    width: 50px;
    height: 30px;
    padding: 5px;
    display: flex;
    align-items: center;
    border-radius: 20px 0px 0px 20px;
    cursor: pointer;
    z-index: 999;
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(50px);
    opacity: 0;
  }
  .options {
    background: white;
    border-radius: 4px;
    box-shadow: 0 0 2px black;
    position: absolute;
    width: $options-w;
    height: 350px;
    right: 100px;
    top: 75px;
    overflow: hidden;
    padding: 20px 10px 0px 10px;
    box-sizing: border-box;
    li {
      width: 100%;
      list-style-type: none;
    }
    .title {
      font-family: Roboto, Helvetica Neue, Arial, sans-serif;
      margin-bottom: 15px;
      margin-top: 10px;
    }
    .bg-overlay {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(209, 185, 185, 0.5);
      padding-bottom: 15px;
      padding-left: 35px;
      padding-right: 35px;
      box-sizing: border-box;

      .colOption {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 3px solid transparent;

        cursor: pointer;
        &:hover {
          border: 3px solid cyan;
        }
      }
      .active {
        border: 3px solid cyan;
      }
    }
    .bg-imgs {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      border-bottom: 1px solid rgba(209, 185, 185, 0.5);
      padding-bottom: 15px;
      .imgOption {
        width: ($options-w - 30px)/5;
        height: 80px;
        background-size: ($options-w - 30px)/5 80px;
        background-position: 50% 50%;
        box-sizing: border-box;
        border: 3px solid transparent;
        border-radius: 8px;
        margin: 1px;
        cursor: pointer;
        &:hover {
          border: 3px solid orangered;
        }
      }
      .active {
        border: 3px solid orangered;
      }
    }
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
