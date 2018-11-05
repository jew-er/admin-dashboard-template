<template>
    <div class="tablelist">
        <datatable :rows="{
            'head': ['Time', 'Day', 'Month'],
            'content': [
                ['15:00PM', 'monday', 'January'],
                ['17:00PM', 'friday', 'Febuary'],
                ['15:00PM', 'monday', 'December',' ']
            ]

        }"
        
        title="Simple plain table"
        subtitle="Has a filter tho"
        width="70%"
        height="40%" />
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
  flex-direction: row;
  justify-content: space-between;
  background: hsla(240, 7%, 81%, 0.15);
  width: calc(100% - 260px);
  overflow: hidden;
  position: absolute;
  right: 0;
  padding: 35px;
  box-sizing: border-box;
  min-height: 100vh;
}
</style>
