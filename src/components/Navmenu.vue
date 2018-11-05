<template>
   <div id="nav">
        
            <img class="navbg" v-bind:src="bgpaths[6]">
            <div class="logo"><font-awesome-icon icon="home" />  logo </div>
            <router-link to="/"><div><font-awesome-icon icon="tachometer-alt" />Dashboard</div></router-link>
            <router-link to="/UserProfile"><div><font-awesome-icon icon="user-circle"/> User Profile</div></router-link>
            <router-link to="/Maps"><div><font-awesome-icon icon="map-marker-alt"/> Maps</div></router-link>
            <router-link to="/tablelist"><div><font-awesome-icon icon="table"/>Table List</div></router-link>
            <router-link to="/ursa"><div><font-awesome-icon icon="atom"/> Crab gifs</div></router-link>
    </div>
</template>

<script>
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
  }
};
</script>

<style lang="scss">
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
    width: 200px;
    padding: 20px;
    margin-bottom: 20px;
  }
  a {
    font-weight: bold;
    color: white;
    text-decoration: none;
    margin: 2px;
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
      justify-content: center;
      align-items: center;
      transition: background 0.1s ease-in;
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
