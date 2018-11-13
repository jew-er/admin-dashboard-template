<template>
    <div class="navtop">
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
      <div v-on:click="reveal" class="hamburger-menu">
        <Iconic  width="35px" height="35px" fill="rgba(0,0,0,0.6)" icon="menu" />
      </div>
    </div>
</template>

<script>
import Dropdown from "@/components/Dropdown.vue";
export default {
  name: "navtop",
  data: function() {
    return {
      revealNavBox: false
    };
  },
  methods: {
    reveal: function() {
      this.revealNavBox = !this.revealNavBox;
    }
  },
  components: {
    Dropdown
  }
};
</script>

<style lang="scss">
.navtop {
  height: 60px;
  width: 100%;
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  box-sizing: border-box;
  display: flex;
  color: rgba(0, 0, 0, 0.4);
  justify-content: space-between;
  .hamburger-menu {
    display: none;
    align-items:center;
    margin-right:25px;
  }
  .navtop-leftbox {
    height: 100%;
    width: 40%;
    min-width: 150px;
    display: flex;
    justify-content: center;
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
        min-width: 150px;
      }
    }
  }
  .navtop-rightbox {
    width: 30%;
    min-width: 300px;
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

@media only screen and (max-width: 800px) {
  .navtop {
    width: 100%;
    left: 0;
    .hamburger-menu {
      display: flex;
      transition: 0.2s ease-in;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
    .navtop-leftbox {
      width: 30%;
      min-width: 200px;
    }
    .navtop-rightbox {
      display: none;
    }
  }
}
</style>

