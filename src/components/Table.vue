<template>
  <div
    class="table_wrapper"
    :class="{'table_plain': plain}"
    :style="{'width': width, 'height':height}"
  >
    <div class="table_heading">
      <div class="table_title">
        <h3>{{title}}</h3>
        <h4>{{subtitle}}</h4>
      </div>
      <div class="table_search">
        <input placeholder="Search table" v-model="inputval">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 52.966 52.966"
          style="enable-background:new 0 0 52.966 52.966;"
          xml:space="preserve"
        >
          <path
            d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
	      c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
	      C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
	      S32.459,40,21.983,40z"
          ></path>
        </svg>
      </div>
    </div>
    <table class="datatable" :class="{'table_striped': striped}" style="width:100%">
      <tr>
        <th v-bind:key="index" v-for="(item,index) in search.head">{{item}}</th>
      </tr>
      <tr v-bind:key="index" v-for="(item,index) in search.content">
        <td :key="row_element" v-for="row_element in item">{{row_element}}</td>
      </tr>
    </table>
    <p v-if="queryResultEmpty">No element matching the query is found</p>
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
    height: String,
    striped: Boolean,
    plain: Boolean
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
  border: 1px solid rgba(0, 0, 0, 0.125);
  background: white;
  padding: 30px;
  border-radius: 4px;
  text-align: left;
  .table_heading {
    display: flex;
    justify-content: space-between;
  }
  .table_search {
    width: 50%;
    display: flex;
    align-items: flex-start;
    box-sizing: border-box;
    justify-content: flex-end;
  }
  .table_search svg {
    fill: white;
    width: 30px;
    height: 30px;
    background: crimson;
    box-sizing: border-box;
    padding: 5px;
    border-top: 1px solid rgba(0, 0, 0, 0.4);
    border-right: 1px solid rgba(0, 0, 0, 0.4);
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  }
  .table_search input {
    width: 60%;
    height: 30px;
    background: white;
    font-size: 1.2em;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-right: none;
    box-sizing: border-box;
    display: inline-block;
  }
  .table_title {
    width: 50%;
  }
  .table_title h4 {
    color: rgba(0, 0, 0, 0.4);
    font-weight: normal;
    margin-bottom: 25px;
  }
  .datatable {
    border-radius: 4px;
    border-collapse: collapse;
    text-align: center;
    tr:hover td {
      background: rgba(0, 0, 0, 0.2);
    }

    th {
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }
    td {
      border-bottom: 1px solid rgba(0, 0, 0, 0.125);
      padding: 8px;
    }
  }
}

.table_striped {
  tr:nth-child(even) {
    background: rgba(0, 0, 0, 0.06);
  }
}

.table_plain {
  border: transparent;
  background: transparent;
}
</style>
