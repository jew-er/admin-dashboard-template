<template>
    <div class="datacard">
        <div class="datacard-top">
            <div :style="{color: 'hsl('+Math.floor(Math.random()*355)+',100%,60%)' }"
            class="datacard-i">
                <font-awesome-icon :icon="dataicon" />
            </div>
            <div class="datacard-c">
                <div>{{ dataname }}</div>
                <div>{{ datavalue }}</div>
            </div>
        </div>
        <div class="datacard-bot">
            <font-awesome-icon :icon="bottomnoteicon" /> {{ bottomnote }}
        </div>
    </div>
</template>

<script>
export default {
  name: "Datacard",
  props: {
    dataicon: String,
    dataname: String,
    datavalue: String,
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
  width: 20%;
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
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.4);
    width: 90%;
    box-sizing: border-box;
    svg {
      font-size: 0.8em;
    }
  }
}
</style>