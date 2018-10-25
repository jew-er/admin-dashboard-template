<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="https://steamusercontent-a.akamaihd.net/ugc/536268710563174540/C1307A372F9FE903D683913F19856055ADEE29A1/">
    <img src="https://i.pinimg.com/originals/e3/25/14/e32514ea46dee138dcbfd6fbd9ad8d27.gif">
    <img src="https://i.pinimg.com/originals/01/43/a3/0143a3babb2cb7a1ab65b1cba4c066bf.gif">
    <img src="https://steamusercontent-a.akamaihd.net/ugc/571150574308106219/C8BBA29FDF97AF9551FAA0E0216BCB7D137D41DD/">
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*{
  margin:0;
  padding:0;
}
.hello{
  display:flex;
  flex-direction:column;
  align-items:center;
  background:white;
  width: calc(100% - 260px);
  position: absolute;
  right:0;
  overflow:hidden;
}
</style>
