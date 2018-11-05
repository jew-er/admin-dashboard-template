<template>
<div class="table_wrapper" :style="{'width': width, 'height':height}">
  <div>
    <h3>{{title}}</h3>
    <h4>{{subtitle}}</h4>
  </div>
  <input v-model="inputval">
  <table class="datatable" style="width:100%">
    <tr>
      <th v-bind:key = "index" v-for="(item,index) in search.head"> 
        {{item}}
      </th>
    </tr>
    <tr v-bind:key = "index" v-for="(item,index) in search.content">
      <td :key = "row_element" v-for="row_element in item">{{row_element}}</td>
    </tr>
  </table> 
   <p v-if="queryResultEmpty"> No element matching the query is found </p>
</div>
</template>

<script>
export default {
  name: "datatable",
  props: {
    rows: Object,
    title: String,
    subtitle: String,
    width: String,
    height: String
  },

  data: function() {
    return {
      data: this.rows,
      queryResultEmpty: 0,
      inputval: ""
    };
  },
  computed: {
    search: function() {
      if (this.inputval.length < 1) {
        this.queryResultEmpty = 0;
        return this.data;
      } else {
        let newdata = Object.assign({}, this.data);
        let q = new RegExp(this.inputval, "i");
        newdata.content = newdata.content.filter(x => x.some(i => q.test(i)));
        if (newdata.content.length != 0) {
          this.queryResultEmpty = 0;
          return newdata;
        } else {
          this.queryResultEmpty = 1;
          return newdata;
        }
      }
    }
  }
};
</script>

<style lang="scss">
.table_wrapper {
  border: 1px solid rgba(0,0,0,0.125);
  background: white;
  padding: 30px;
  border-radius: 4px;
  text-align:left;
 div h3{

 }
  
 div h4{
   color: rgba(0, 0, 0, 0.4);
   font-weight:normal;
   margin-bottom:25px;
 }
  .datatable {
    border-radius: 4px;
    border-collapse: collapse;
    text-align:center;
    tr:hover td{
      background:rgba(0,0,0,0.1);
    }
    th {
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }
    td {
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }
  }
}
</style>
