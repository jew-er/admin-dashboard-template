<template>
<div class="ursa">
    <img src="https://media.giphy.com/media/RVaqnLYmO79C0/giphy.gif">
    <Iconic icon="home" color="crimson" width="24px" height="24px" />
</div>
</template>

<script>
import Iconic from "@/components/Iconic.vue";
export default {
  components: {
    Iconic
  }
};
</script>

<style lang="scss">
.ursa {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: hsla(240, 7%, 81%, 0.15);
  width: calc(100% - 260px);
  position: absolute;
  right: 0;
  padding: 10px;
  top:60px;
  box-sizing: border-box;
  height:100%;
  img {
    width: 100px;
    height: 100px;
  }
}
</style>
