<template>
    <div class="inputfield">
        <input :style="{'width':width}" v-model="inputcontent">
        <label :class="{ 'ilabel': true, 'label-active': testForNull }">{{label}}</label>
        <div :class="{'iborder': true, 'border-active': testForNull }"></div> 
    </div>
</template>

<script>
export default {
  name: "Inputfield",
  props: {
    label: String,
    width: String
  },
  data: function() {
    return {
      inputcontent:""
    };
  },
   computed: {
     testForNull: function(){
       return this.inputcontent.length>0;
     }
   }
};
</script>

<style lang="scss">


.inputfield {
  display: inline-block;
  position: relative;
   
  input {
    background: transparent;
    border: none;
    padding: 5px;
    box-sizing:border-box;
    border-bottom: 3px solid grey;
  }

  input:focus ~ div {
    width: 100%;
    left: 0;
  }

  input:focus ~ label {
    color: crimson;
    top: -20px;
    left: 3px;
    font-size: 0.9em;
  }
}
.ilabel {
    color: rgba(0, 0, 0, 0.4);
    position: absolute;
    left: 5px;
    top: 5px;
    pointer-events: none;
    user-select: none;
    transition: 0.2s linear;
  }

  .iborder {
    border-bottom: 3px solid crimson;
    position: absolute;
    width: 0;
    top:25px;
    left: 50%;
    height: 1px;
    transition: 0.2s linear;
  }

 .label-active {
  color: crimson;
  top: -20px;
  left: 3px;
  font-size: 0.9em;
}

.border-active{
  width: 100%;
  left: 0;
}
</style>
