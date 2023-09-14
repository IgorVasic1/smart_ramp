<template>
    <v-card class="card-background pa-6" elevation="0" style="border-top-left-radius:50px;">
      <div id="chart">
        <apexchart class="pa-6" type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
    </v-card>
</template> 


<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  data: function() {
    return {
      series: [{
            name: 'Broj Automobila',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 67, 68, 69],
            color: '#184264d9',
          }, {
            name: 'Broj Osoba',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 94, 94, 94],
            color: '#CFD8DC',
          },
          {
            name: 'Broj Životinja',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 44, 44, 44],
            color:'#78909C'
          }
        
        ],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Sje','Velj', 'Ožu', 'Tra', 'Svi', 'Lip','Srp', 'Kol', 'Ruj', 'Lis', 'Stu', 'Pro'],
            },
            yaxis: {
              title: {
                text: 'Godišnji priklaz'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            }
          },
    }
    },
    components: {
      name: 'ChartPanel.vue',
      apexchart: VueApexCharts,
    }
}
</script>
<style>
.card-background {
  width: 100%;
  padding: 16px;
  color: white !important;
  border-top-left-radius: 50px;
}
</style>
