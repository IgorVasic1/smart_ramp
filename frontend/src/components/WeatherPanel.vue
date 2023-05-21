<template>
     <v-card
            width="100%"
            height="110vh"
            class="pt-4 px-8 pb-12"
            outlined>
    <v-card-item>
      <v-card-title class="pl-0 pt-0">Vrijeme</v-card-title>
      <template >
        <v-icon
          size="18"
          color="error"
          class="me-1 pb-1"
        >{{ icons.mdiCloudAlert }}</v-icon>
        Upozoravajući alarm 
      </template>
    </v-card-item>
    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col
          class="text-h2"
          cols="6"
        >
          33&deg;
        </v-col>

        <v-col cols="6" class="text-right">
          <v-icon
            color="error"
            size="88"
          >{{ icons.mdiWeatherSunny }}</v-icon>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between">
      <v-list-item
        density="compact"
        prepend-icon="mdi-weather-windy"
      >
        <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
      </v-list-item>

      <v-list-item
        density="compact"
        prepend-icon="mdi-weather-pouring"
      >
        <v-list-item-subtitle>48%</v-list-item-subtitle>
      </v-list-item>
    </div>

    <v-expand-transition>
      <div v-if="expand">
        <div class="py-2">
          <v-slider
            v-model="time"
            :max="6"
            :step="1"
            :ticks="labels"
            class="mx-4"
            color="primary"
            density="compact"
            hide-details
            show-ticks="always"
            thumb-size="10"
          ></v-slider>
        </div>

        <v-list class="bg-transparent">
          <v-list-item
            v-for="item in forecast"
            :key="item.day"
            :title="item.day"
          >
          <v-list-item-subtitle>{{ item.temp }}</v-list-item-subtitle>
          <v-icon >{{ item.icon }}</v-icon>
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions class="pt-5 pb-8">
      <v-btn small class="white--text" color="#003e76" @click="expand = !expand">
        {{ !expand ? 'Potpuni izvještaj' : 'Sakrij' }}
      </v-btn>
    </v-card-actions>
    <v-divider></v-divider>
    <v-card-title class="pl-0">Parking</v-card-title>
    <div id="chart" >
        <apexchart class="pl-0 pb-0" type="radialBar" :options="chartOptions" :series="series"></apexchart>
      </div>
      <v-card-subtitle class="pl-0 pt-0 ml-0">Popunjenost parkinga</v-card-subtitle>
    <v-card-title class="pl-0 ml-8 mr-4">
      <v-icon large>{{ icons.mdiAccountMultiple }}</v-icon><span class="red--text ml-4">233</span>
    </v-card-title>
    <v-card-subtitle class="pl-0">Broj Korisnika</v-card-subtitle>
    <v-card-title class="pl-0 mr-4 ml-8">
      <v-icon large>{{ icons.mdiCarBack }}</v-icon><span class="red--text ml-4">122</span>
    </v-card-title>
    <v-card-subtitle class="pl-0">Broj Automobila</v-card-subtitle>
    <v-card-title class="pl-0 ml-8">
      <v-icon large>{{ icons.mdiParking }}</v-icon><span class="red--text ml-4">78</span>
    </v-card-title>
    <v-card-subtitle class="pl-0 mr-4">Broj Parking Mjesta</v-card-subtitle>
    
        </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import { mdiWeatherSunny, mdiWhiteBalanceSunny, mdiCloudOutline, mdiCloudAlert, mdiAccountMultiple, mdiCarBack, mdiParking } from "@mdi/js";
export default {
  components: {
    name: 'WeatherPanel.vue',
    apexchart: VueApexCharts,
  },
    
    data: () => ({
      series: [76],
          chartOptions: {
            chart: {
              type: 'radialBar',
              offsetY: -20,
              sparkline: {
                enabled: true
              }
            },
            plotOptions: {
              radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                  background: "#e7e7e7",
                  strokeWidth: '97%',
                  margin: 5, // margin is in pixels
                  dropShadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                  }
                },
                dataLabels: {
                  name: {
                    show: false
                  },
                  value: {
                    offsetY: -2,
                    fontSize: '22px'
                  }
                }
              }
            },
            grid: {
              padding: {
                top: -10
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
              },
            },
            labels: ['Average Results'],
          },
      icons: {
        mdiWeatherSunny: mdiWeatherSunny,
        mdiWhiteBalanceSunny: mdiWhiteBalanceSunny,
        mdiCloud: mdiCloudOutline,
        mdiCloudAlert: mdiCloudAlert,
        mdiAccountMultiple: mdiAccountMultiple,
        mdiCarBack: mdiCarBack,
        mdiParking: mdiParking,
      },
      labels: { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' },
      expand: false,
      time: 0,
      forecast: [
        { day: 'Tuesday', icon: mdiWhiteBalanceSunny, temp: '24\xB0/12\xB0' },
        { day: 'Wednesday', icon: mdiWhiteBalanceSunny, temp: '22\xB0/14\xB0' },
        { day: 'Thursday', icon: mdiCloudAlert, temp: '25\xB0/15\xB0' },
      ],
    }),
  }
</script>