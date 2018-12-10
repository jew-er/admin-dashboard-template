<template>
  <div class="dropdown">
    <div class="dd-btn" v-on:click="showMenu">
      <slot name="menu-tag"></slot>
      <Iconic icon="dropdown" fill="rgba(0,0,0,0.4)" padding="0px"/>
    </div>
    <div :class="{'reveal-menu': reveal}" class="dd-list">
      <slot name="menu-item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data: function() {
    return {
      reveal: false
    };
  },
  methods: {
    showMenu() {
      this.reveal = !this.reveal;
    }
  }
};
</script>

<style lang="scss">
.dropdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  z-index: 1;
  user-select: none;
  .dd-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  svg {
    width: 100%;
    height: 100%;
  }
  &:hover {
    color: springgreen;
    fill: springgreen;
  }
  &:hover svg {
    fill: springgreen;
  }
  .dd-list {
    background: white;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    z-index: 1;
    margin-left: 10%;
    height: 0px;
    overflow: auto;
    a {
      display: inline-block;
      text-decoration: none;
      color: black;
      text-align: left;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }

  .reveal-menu {
    height: auto;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
}
</style>
