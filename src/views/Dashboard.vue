<template>
  <div class="dashboard">
    <div class="datacard-row">
      <div class="datacard-wrapper">
        <Datacard
          cardicon="cloud"
          cardname="Capacity"
          cardvalue="105GB"
          bottomnote="Updated now"
          bottomnoteicon="save"
        />
      </div>
      <div class="datacard-wrapper">
        <Datacard
          cardicon="app"
          cardname="Revenue"
          cardvalue="$1,345"
          bottomnote="Last day"
          bottomnoteicon="restart"
        />
      </div>
      <div class="datacard-wrapper">
        <Datacard
          cardicon="heart"
          cardname="Errors"
          cardvalue="23"
          bottomnote="Last day"
          bottomnoteicon="resume"
        />
      </div>
      <div class="datacard-wrapper">
        <Datacard
          cardicon="clock-1"
          cardname="Followers"
          cardvalue="+23"
          bottomnote="Updated now"
          bottomnoteicon="repeat"
        />
      </div>
    </div>
    <div class="chartrow">
      <div class="chart-wrapper">
        <Basiccard
          height="100%"
          width="100%"
          title="User Behaviour"
          paddingtop="140px"
          subtitle="24 Hours performance"
          bottomnote="A note was left here"
          bottomnoteicon="archive"
        >
          <apexcharts width="300" type="pie" :options="chartOptions" :series="series"></apexcharts>
        </Basiccard>
      </div>
      <div class="chart-wrapper">
        <Basiccard
          title="Information chart"
          subtitle="performance in the last year"
          bottomnoteicon="back"
          bottomnote="Updated today"
          height="100%"
          width="100%"
        >
          <apexcharts
            width="400"
            height="200"
            type="area"
            :options="chart2Options"
            :series="chart2Series"
          ></apexcharts>
        </Basiccard>
      </div>
      <div class="chart-wrapper">
        <Basiccard
          title="Some information"
          subtitle="For these years"
          bottomnoteicon="command"
          bottomnote="Updated 5 minutes ago"
          height="100%"
          width="100%"
        >
          <apexcharts
            width="500"
            height="250"
            type="bar"
            :options="chart3Options"
            :series="chart3Series"
          ></apexcharts>
        </Basiccard>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Datacard from "@/components/Datacard.vue";
import VueApexCharts from "vue-apexcharts";
import Basiccard from "@/components/Basiccard.vue";

export default {
  name: "dashboard",
  components: {
    HelloWorld,
    Datacard,
    Basiccard,
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      chartOptions: {
        labels: ["Blue", "Green", "Yellow", "Red"]
      },
      series: [11, 32, 45, 32],

      //Chart number two

      chart2Options: {
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
        },
        tooltip: {
          fixed: {
            enabled: true,
            position: "topRight"
          }
        }
      },
      chart2Series: [
        {
          name: "TheThing",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Thingless",
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: "Thingler",
          data: [0, 5, 10, 20, 3, 40, 150]
        }
      ],

      //Chart number two ends here

      //Chart three begins here//

      chart3Options: {
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      chart3Series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]

      //Chart three ends here
    };
  },
  methods: {
    updateChart() {
      const max = 90;
      const min = 20;
      const newData = this.series.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      this.series = newData;
    }
  }
};
</script>

<style lang="scss">
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: hsla(240, 7%, 81%, 0.15);
  width: 100%;
  overflow: hidden;
  right: 0;
  top: 60px;
  padding: 35px;
  box-sizing: border-box;
}

.datacard-row {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  .datacard-wrapper {
    width: 24%;
  }
}

.chartrow {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  .chart-wrapper {
    width: 50%;
    height: 300px;
  }
}

@media only screen and (max-width: 1200px) {
  .datacard-row {
    .datacard-wrapper {
      width: 46%;
      margin-top: 10px;
    }
  }

  .chartrow {
    .chart-wrapper {
      width: 100%;
      margin-top: 10px;
    }
  }
}

@media only screen and (max-width: 800px) {
  .dashboard {
    width: 100%;
  }
  .datacard-row {
    .datacard-wrapper {
      width: 98%;
    }
  }
}
</style>
