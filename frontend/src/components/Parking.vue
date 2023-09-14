<template>
  <v-card height="43vh" elevation="0" style="border-bottom-left-radius: 50px;">
    <v-card-text>
      <v-row>
        <v-col cols="8">
          <div class="google-map pt-0" style="height: 350px; width: 100%;"></div>
        </v-col>
        <v-col cols="4">
          <v-card outlined elevation="0" v-for="(parking, i) in info.data" :key="i" class="parking-card px-4">
                <v-card-title style="color: #184264d9;" class="pb-6" v-on="on">
                  {{ parking.name }}
                  <v-spacer></v-spacer>
                  <v-icon large class="ml-4">{{ mdiCar }}</v-icon>
                  <span style="color: #184264d9;">{{ parking.normal_occupied }}/</span>
                  <span style="color: #184264d9;">{{ parking.capacity }}</span>
                  <v-icon class="weather-stats-icon pl-2" style="color: #184264d9;">{{ icons.mdiCarBack }}</v-icon>
                </v-card-title>
                  <v-progress-linear
                    :value="parking.normal_occupied * 100 / parking.capacity"
                    :max="parking.capacity*100"
                    color="#184264d9"
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
import { mdiCar, mdiCarBack, mdiParking  } from '@mdi/js';
import axios from 'axios';

export default {
  data() {
    return {
      parkData: [],
      info: null,
      icons: {
      mdiCarBack: mdiCarBack,
      mdiParking: mdiParking,
    },
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
            styles: [
          // Add your custom map style JSON here
          {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#CFD8DC" // Change this color to your desired color
              }
            ]
          }
        ]
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
                icon: {
                  url: 'path/to/custom-marker.png', // Replace with the path to your custom marker icon
                  scaledSize: new google.maps.Size(32, 32), // Adjust the size of the marker icon as needed
                },
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
  border:1px solid #EEEEEE;
}

.v-tooltip__content {
  background-color: #f5f5f5; /* Set your desired background color */
}
</style>
