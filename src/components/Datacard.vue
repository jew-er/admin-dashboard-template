<template>
  <div class="datacard">
    <div class="datacard-top">
      <div class="datacard-i">
        <Iconic
          :fill="'hsl('+Math.floor(Math.random()*355)+',100%,60%)'"
          :icon="cardicon"
          width="40px"
          height="40px"
        />
      </div>
      <div class="datacard-c">
        <div>{{ cardname }}</div>
        <div>{{ cardvalue }}</div>
      </div>
    </div>
    <div class="datacard-bot">
      <Iconic fill="grey" :icon="bottomnoteicon" width="16px" height="16px"/>
      <p>{{ bottomnote }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Datacard",
  props: {
    cardicon: String,
    cardname: String,
    cardvalue: String,
    bottomnote: String,
    bottomnoteicon: String
  }
};
</script>


<style lang="scss">
.datacard {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 4px;
  background: white;
  height: 130px;
  width: 100%;
  color: #212529;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .datacard-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;
    width: 100%;
    height: 60%;

    .datacard-i {
      width: 40%;
      height: 100%;
      padding-top: 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      & {
        font-size: 2em;
        //color: rgb(random(255),random(255),random(255));
      }
    }

    .datacard-c {
      width: 60%;
      height: 100%;
      padding-top: 20px;
      box-sizing: border-box;
      div:nth-of-type(1) {
        color: rgba(0, 0, 0, 0.4);
        box-sizing: border-box;
        text-align: right;
        width: 90%;
        font-size: 0.9em;
      }
      div:nth-of-type(2) {
        box-sizing: border-box;
        text-align: right;
        width: 90%;
        font-size: 1.5em;
      }
    }
  }
  .datacard-bot {
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.4);
    width: 90%;
    box-sizing: border-box;
    padding-left: 10px;
    p {
      margin-left: 10px;
    }
  }
}
</style>
