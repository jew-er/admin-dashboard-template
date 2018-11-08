<template>
  <div>
    <div id="navtop">
      <div class="navtop-leftbox">
        <div class="navtop-search">
          <input>
          <Iconic icon="zoom-in" />
        </div>
      </div>
      <ul class="navtop-rightbox">
        <li><a href="#">Account</a></li>
        <li>
          <Dropdown>
          <p slot="menu-tag">
            Dropdown
          </p>
          <a href="#" slot="menu-item">
            An action
          </a>
          <a href="#" slot="menu-item">
            A link
          </a>
          <a href="#" slot="menu-item">
            Somewhere
          </a>
          <a href="#" slot="menu-item">
            Something
          </a>
          <a href="#" slot="menu-item">
            Placeholder
          </a>
         </Dropdown>
        </li>
        <li><a href="#"> Log Out</a></li>
      </ul>
    </div>
    <div id="nav">     
            <img class="navbg" v-bind:src="bgpaths[1]">
            <div class="logo"> <Iconic icon="magnet" fill="springgreen" /> Vue Template </div>
            <router-link to="/">
              <div>
                <Iconic width="30px" height = "30px" fill="white" icon="home"/>
                <p>Dashboard</p>
              </div>
            </router-link>
            <router-link to="/UserProfile">
              <div>
                <Iconic width="30px" height = "30px" fill="white" icon="user-3"/>
                <p>User Profile</p>
              </div>
            </router-link>
            <router-link to="/Maps">
              <div>
                <Iconic width="30px" height = "30px" fill="white" icon="map-1"/>
                <p>Maps</p>
              </div></router-link>
            <router-link to="/tablelist">
              <div>
                <Iconic width="30px" height = "30px" fill="white" icon="windows-4"/>
                <p>Table List</p>
              </div>
            </router-link>
      </div>
    </div>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";
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
      ]
    };
  },
  components: {
    Dropdown
  }
};
</script>

<style lang="scss">
#navtop {
  height: 60px;
  width: calc(100% - 260px);
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  position: absolute;
  box-sizing: border-box;
  display: flex;
  color: rgba(0, 0, 0, 0.4);
  justify-content: space-around;
  right: 0;
  .navtop-leftbox {
    height: 100%;
    width: 50%;
    .navtop-search {
      display: flex;
      align-items: center;
      height: 100%;
      & input {
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 4px;
        height: 25px;
        padding: 0;
        width: 40%;
      }
    }
  }
  .navtop-rightbox {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-top: 20px;
    list-style-type: none;
    li > a {
      color: rgba(0, 0, 0, 0.4);
      text-decoration: none;
      &:hover {
        color: springgreen;
      }
    }
  }
}
#nav {
  width: 260px;
  height: 100vh;
  position: fixed;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    width: 220px;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    box-sizing: border-box;
    padding-right: 60px;
  }
  a {
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    color: white;
    text-decoration: none;
    margin: 2px;
    font-size: 0.8em;
    text-transform: uppercase;

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
</style>
