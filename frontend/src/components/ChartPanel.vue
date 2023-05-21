<template>
    <v-card>
        <apexchart class="pa-6" type="bar" :options="options" :series="series"></apexchart>
    </v-card>
</template> 


<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  data: function() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
    },
    components: {
      name: 'ChartPanel.vue',
      apexchart: VueApexCharts,
    }
}
</script>
