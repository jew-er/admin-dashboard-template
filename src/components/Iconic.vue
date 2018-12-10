<template>
  <div
    :style="{ 'width': width, 'height': height, 'padding':padding, 'background': background, 'fill':fill }"
    v-html="require(`./../../public/svg/${icon}.svg`)"
  ></div>
</template>

<script>
export default {
  name: "Iconic",
  props: {
    icon: String,
    width: {
      type: String,
      default: "24px"
    },
    height: {
      type: String,
      default: "24px"
    },
    background: {
      type: String,
      default: "transparent"
    },
    fill: {
      type: String,
      default: "crimson"
    },
    padding: {
      type: String,
      default: "0px"
    }
  }
};
</script>


<style lang="scss">
svg {
  width: 100%;
  height: 100%;
}
</style>
