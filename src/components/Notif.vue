<template>
  <transition name="vanish">
    <div v-if="on" @click="handleClick" v-bind:style="{ 'background': color[type]}" class="notif">
      <div class="iconpart" v-if="hasIcon">
        <Iconic width="30px" height="30px" fill="white" :icon="icon"/>
      </div>
      <div class="content">
        <slot></slot>
      </div>
      <div v-if="closeButton" class="close">
        <Iconic width="20px" height="20px" fill="white" icon="add"/>
      </div>
    </div>
  </transition>
</template>
<script>
import Iconic from "@/components/Iconic.vue";
export default {
  name: "Notif",
  props: {
    icon: String,
    closeButton: Boolean,
    hasIcon: Boolean,
    isStatic: Boolean,
    type: String,
    mode: String
  },
  components: {
    Iconic
  },
  data() {
    return {
      on: true,
      color: {
        primary: "#0336FF",
        danger: "crimson",
        success: "springgreen",
        info: "#1dc7ea",
        warning: "#ff9500"
      }
    };
  },
  created() {
    if (this.mode != "static")
      setTimeout(() => {
        this.on = false;
      }, 3000);
  },
  methods: {
    handleClick: function() {
      this.on = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.notif {
  background: crimson;
  color: white;
  width: 400px;
  display: flex;
  height: auto;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.7);
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  pointer-events: all;
  .iconpart {
    //border: 1px solid black;
    margin: 0 12px 0 12px;
  }
  .content {
    text-align: left;
    width: 100%;
    font-weight: bold;
    font-size: 14px;
  }
  .close {
    margin: 0 12px 0 12px;
    transition: background 0.1s ease-in;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    padding: 5px;
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
    div {
      transform: rotate(45deg);
    }
  }
}
.vanish-enter-active {
  animation: pewpew 0.4s;
}
.vanish-leave-active {
  animation: pewpew 0.4s reverse;
}

@keyframes pewpew {
  from {
    max-height: 0px;
    padding: 8px;
    transform: scaleX(1.3);
    opacity: 0;
  }
  to {
    max-height: 400px;
    padding: 8px;
    transform: scaleX(1);
    opacity: 1;
  }
}
</style>
