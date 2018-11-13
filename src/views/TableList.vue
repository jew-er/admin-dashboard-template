<template>
    <div class="tablelist">
        <datatable :rows="{
            'head': ['Id', 'Name','Salary','Country', 'City'],
            'content': [
                ['1', 'Dakota Rice', '$36.738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', '	Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten']
            ]

        }"
        
        title="Simple plain table"
        subtitle="Has a filter tho"
        width="70%"
        height="40%"
        :striped=false
        :plain=true />

        <datatable :rows="{
            'head': ['Id', 'Name','Salary','Country', 'City'],
            'content': [
                ['1', 'Dakota Rice', '$36.738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', '	Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten']
            ]

        }"
        
        title="Simple striped table"
        subtitle="Has stripes,okay?"
        width="70%"
        height="40%"
        :striped=true
        :plain=true />

        <datatable :rows="{
            'head': ['Id', 'Name','Salary','Country', 'City'],
            'content': [
                ['1', 'Dakota Rice', '$36.738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', '	Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten']
            ]

        }"
        
        title="Table with white background"
        subtitle="Zebra table"
        width="70%"
        height="40%"
        :striped=true
        :plain=false />
    </div>
</template>

<script>
import datatable from "@/components/Table.vue";
export default {
  name: "tablelist",
  components:{
      datatable
  }
};
</script>

<style lang="scss">
.tablelist {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  background: hsla(240, 7%, 81%, 0.15);
  width: 100%;
  overflow: hidden;
  padding: 35px;
  box-sizing: border-box;
  min-height: 100vh;
}
</style>
