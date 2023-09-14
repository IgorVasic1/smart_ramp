<template>
  <v-card class="weather-panel px-16 mt-18" outlined>
    <v-card-title class="weather-title" style="color: #184264d9;">Vrijeme</v-card-title>
    <v-divider class="py-6"></v-divider>
    <div class="weather-stats">
      <div class="weather-stat-item">
        <v-icon class="weather-stat-icon" style="color: red;">mdi-weather-windy</v-icon>
        <span class="weather-stat-value" style="color: #184264d9;">123 km/h</span>
      </div>
      <div class="weather-stat-item">
        <v-icon class="weather-stat-icon" style="color: gray;">mdi-weather-pouring</v-icon>
        <span class="weather-stat-value" style="color: #184264d9;">48%</span>
      </div>
    </div>
    <v-divider class="py-4"></v-divider>
    <v-expand-transition>
      <div>
        <v-row class="weather-forecast">
          <v-col
            v-for="item in forecast"
            :key="item.day"
            cols="3"
            class="weather-forecast-item"
          >
            <span class="weather-forecast-day" style="color: #184264d9;">{{ item.day }}</span>
            <v-icon class="weather-forecast-icon" :style="{ color: changeColor() }">{{ item.icon }}</v-icon>
            <span class="weather-forecast-temp" style="color: #184264d9;">{{ item.temp }}</span>
          </v-col>
        </v-row>
      </div>
    </v-expand-transition>
    <v-divider></v-divider>
    <v-card-title class="weather-title" style="color: #184264d9;">Parking</v-card-title>
    <div>
      <v-card-text>
        <v-progress-linear
          :value="parkingFulfillness"
          background-color="#e7e7e7"
          color="#184264d9"
        ></v-progress-linear>
      </v-card-text>
      <v-card-subtitle class="pt-0 pb-6">Popunjenost parkinga 60%</v-card-subtitle>
      <v-card outlined class="weather-card">
        <div class="weather-stats">
          <div class="weather-stats-title">
            <v-icon class="weather-stats-icon">{{ icons.mdiAccountMultiple }}</v-icon>
            <span class="weather-stats-value pl-1 font-weight-bold">233</span>
            <span class="weather-stats-value pl-4" >Korisnici</span>
          </div>
        </div>
      </v-card>

      <v-card outlined class="weather-card">
        <div class="weather-stats">
          <div class="weather-stats-title">
            <v-icon class="weather-stats-icon">{{ icons.mdiCarBack }}</v-icon>
            <span class="weather-stats-value pl-1 font-weight-bold">122</span>
            <span class="weather-stats-value pl-4" >Automobili</span>
          </div>
        </div>
      </v-card>

      <v-card outlined style="border: 1px solid #EEEEEE;" class="weather-card mb-16">
        <div class="weather-stats">
          <div class="weather-stats-title">
            <v-icon class="weather-stats-icon">{{ icons.mdiParking }}</v-icon>
            <span class="weather-stats-value pl-1 font-weight-bold">78</span>
            <span class="weather-stats-value pl-4">Parking Mjesta</span>
          </div>
        </div>
      </v-card>
    </div>
  </v-card>
</template>
<script>
import VueApexCharts from 'vue-apexcharts';
import {
  mdiWeatherSunny,
  mdiCloudAlert,
  mdiAccountMultiple,
  mdiCarBack,
  mdiParking
} from "@mdi/js";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data: () => ({
    parkingFulfillness: 60, // Set the initial fulfillment value
    expand: false,  
    icons: {
      mdiWeatherSunny: mdiWeatherSunny,
      mdiCloudAlert: mdiCloudAlert,
      mdiAccountMultiple: mdiAccountMultiple,
      mdiCarBack: mdiCarBack,
      mdiParking: mdiParking,
    },
    labels: { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' },
    time: 0,
    forecast: [
      { day: 'Monday', icon: mdiWeatherSunny, temp: '24\xB0/12\xB0'},
      { day: 'Tuesday', icon: mdiWeatherSunny, temp: '22\xB0/14\xB0' },
      { day: 'Wednesday', icon: mdiWeatherSunny, temp: '22\xB0/14\xB0' },
      { day: 'Thursday', icon: mdiCloudAlert, temp: '25\xB0/15\xB0' },
      { day: 'Friday', icon: mdiWeatherSunny, temp: '22\xB0/14\xB0' },
      { day: 'Saturday', icon: mdiWeatherSunny, temp: '22\xB0/14\xB0' },
      { day: 'Sunday', icon: mdiWeatherSunny, temp: '24\xB0/12\xB0' },
    ],
  }),
  methods:{
    changeColor() {
  return this.forecast.map(item => {
    if (item.icon === this.icons.mdiWeatherSunny) {
      return 'yellow';
    } else {
      return 'gray';
    }
  });
},
  }
}

</script>

<style scoped>
.weather-panel {
  width: 100%;
  padding: 16px;
  color: white !important;
  height: 91vh; /* Set the height to 100% of the viewport height */
  border-top-right-radius: 50px; /* Set border radius of top right corner */
  border-bottom-right-radius: 50px; /* Set border radius of bottom right corner */
  border-top-left-radius: 0; /* Set border radius of top left corner */
  border-bottom-left-radius: 0; /* Set border radius of bottom left corner */
}
.weather-card{
  background-color: #184264d9 !important;
  border-radius: 10px;
  color: #ffff !important;
}

.weather-panel.theme--dark {
  width: 100%;
  padding: 16px;
  background-color: #757575;
  color: white;
}

.weather-title {
  font-size: 20px;
  color: white;
}

.weather-alert {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.weather-icon {
  margin-right: 4px;
}

.weather-alert-text {
  font-size: 14px;
  color: white;
}

.weather-info {
  padding: 0;
}

.weather-temperature {
  font-size: 48px;
  font-weight: bold;
  color: white;
}

.weather-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.weather-stat-item {
  display: flex;
  align-items: center;
  color: white;
}

.weather-stat-icon {
  margin-right: 4px;
}

.weather-forecast {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.weather-forecast-item {
  flex-basis: 14%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.weather-forecast-day {
  margin-bottom: 4px;
  font-size: 12px;
}

.weather-forecast-icon {
  font-size: 20px;
}

.weather-forecast-temp {
  font-size: 12px;
}

.weather-chart {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.weather-stats-chart {
  width: 100%;
  height: 100px;
}

.weather-stats {
  display: flex;
  justify-content: space-between;
}

.weather-stats-title {
  display: flex;
  align-items: center;
  color: white;
}

.weather-stats-icon {
  margin-right: 4px;
}
.weather-card {
  background-color: transparent;
  border: 1px solid #757575;
  margin-bottom: 16px;
  color: white;
}
.weather-stats {
  padding: 16px;
}

.weather-stats-title {
  display: flex;
  align-items: center;
}

.weather-stats-icon {
  margin-right: 4px;
}
</style>
