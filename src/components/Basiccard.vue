<template>
    <div class="basiccard" :style="{'width': width, 'height':height}">
        <div class="basiccard-top">
            <div class="basiccard-title">
                <div>{{title}}</div>
                <div>{{subtitle}}</div>
            </div>
            <div class="basiccard-content" :style="{'padding-top': paddingtop, 'padding-left':paddingleft}">
                <slot></slot>
            </div>
        </div>
        <div class="basiccard-bot">
             <Iconic fill="grey" :icon="bottomnoteicon" width="16px" height="16px"/> <p>{{ bottomnote }}</p>
        </div>
    </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "Basiccard",
  props: {
    title: String,
    subtitle: String,
    width:String,
    height: String,
    paddingtop: String,
    paddingleft:  String,
    bottomnote: String,
    bottomnoteicon: String
  },
  components:{
      apexchart: VueApexCharts
  }
};
</script>
<style lang="scss">
.basiccard {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 4px;
  background: white;
  color: #212529;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  .basiccard-top {
    height: 90%;
    width:100%;

    .basiccard-title{
        text-align:left;
        padding-left: 15px;
        padding-top: 15px;
        width:100%;
        height:15%;
        box-sizing:border-box;
        div:nth-of-type(1){
            font-size:1.4em;
        }
        div:nth-of-type(2){
            color:rgba(0, 0, 0, 0.4);
            font-size: 0.8em;
        }
    }

    .basiccard-content{
        display: flex;
        align-items:center;
        justify-content:center;
        overflow: hidden;
        width:100%;
        height:85%;
         box-sizing:border-box;
         padding-top:30px;

    }
  }
  .basiccard-bot {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.4);
    width: 90%;
    height: 10%;
    box-sizing: border-box;
    p {
      margin-left:10px
    }
  }
}
</style>
