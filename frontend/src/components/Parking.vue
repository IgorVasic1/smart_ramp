<template>
  <v-card height="43vh" elevation="0" style="border-bottom-left-radius: 50px;">
    <v-card-text>
      <v-row>
        <v-col cols="8">
          <div class="google-map pt-0" style="height: 350px; width: 100%;"></div>
        </v-col>
        <v-col cols="4">
          <v-card outlined elevation="0" v-for="(parking, i) in info.data" :key="i" class="parking-card px-4">
                <v-card-title class="pb-6" v-on="on">
                  {{ parking.name }}
                  <v-spacer></v-spacer>
                  <v-icon large class="ml-4">{{ mdiCar }}</v-icon>
                  <span>{{ parking.normal_occupied }}</span>/
                  <span>{{ parking.capacity }}</span>
                </v-card-title>
                  <v-progress-linear
                    :value="parking.normal_occupied"
                    :max="parking.capacity"
                    color="green"
                    class="pb-0 pl-4 pr-4 mb-0"
                    height="5"
                  >
                </v-progress-linear>
            <v-card-subtitle></v-card-subtitle>
            <!-- Add other relevant data properties from the API response -->
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { mdiCar, mdiCarHatchback } from '@mdi/js';
import axios from 'axios';

export default {
  data() {
    return {
      parkData: [],
      info: null,
    };
  },
  mounted() {
    axios
      .get('https://demo.smart.sum.ba/parking?withParkingSpaces=1')
      .then(response => {
        this.info = response;
        this.initMap(); // Call initMap() after data has been fetched and the DOM is rendered
      });
  },
  methods: {
    initMap() {
      fetch('https://demo.smart.sum.ba/parking?withParkingSpaces=1')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          const map = new google.maps.Map(document.querySelector('.google-map'), {
            zoom: 8,
            center: { lat: 43.915886, lng: 17.679076 },

          });
          let markers = [];
          // Loop through the data and add markers to the map
          data.forEach(parking => {
            parking.parkingSpaces.forEach(space => {
              let marker = new google.maps.Marker({
                position: {
                  lat: space.lat,
                  lng: space.lng,
                },
                map: map,
              });
              markers.push(marker);
            });
          });
          const markerCluster = new MarkerClusterer(map, markers, {
            imagePath:
              'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
          });
        });
    },
  },
};
</script>

<style scoped>
.parking-card {
  margin-bottom: 10px;
}

.v-tooltip__content {
  background-color: #f5f5f5; /* Set your desired background color */
}
</style>
