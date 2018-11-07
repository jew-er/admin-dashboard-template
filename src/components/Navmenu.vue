<template>
   <div id="nav">
        
            <img class="navbg" v-bind:src="bgpaths[6]">
            <div class="logo"> <Iconic icon="magnet" fill="white" /> logo </div>
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
            <router-link to="/ursa">
              <div> 
                <Iconic width="30px" height = "30px" fill="white" icon="windows-4"/>
                <p>Crab gifs</p>           
              </div>
            </router-link>
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
  },
  components: {}
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
    display: flex;
    justify-content: space-between;
    padding-left: 50px;
    box-sizing: border-box;
    padding-right: 80px;
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
