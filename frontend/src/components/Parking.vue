<template>
      <v-row class="ma-0 pa-0">
        <v-col class="pa-0" v-for="(parkingSpace, index) in parkingSpaces" :key="index">
          <v-card style="height:218px;">
            <v-card-subtitle >
              <span class="text--gray pl-2 ">{{ parkingSpace.parking_space_name }}</span>
            </v-card-subtitle>
            <v-card-subtitle class="px-8 pb-12">
                <span class="text--gray">{{ parkingSpace.occupied ? "Zauzet":"Slobodan" }}</span>
            </v-card-subtitle>
              <v-icon class="pl-12 pb-12" :style="{ color: parkingSpace.occupied ? 'red' : 'green' }">
                        {{ parkingSpace.icon }}
            </v-icon>
          </v-card>
        </v-col>
      </v-row>
  </template>
  
  <script>
  import { mdiCar} from "@mdi/js";
  export default {
    components: {
        name: 'Parking.vue',
    },
    data() {
      return {
        parkingSpaces: [
          {
            parking_space_name: 'Parking 1',
            occupied: 0,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 2',
            occupied: 1,
            icon: mdiCar

          },
          {
            parking_space_name: 'Parking 3',
            occupied: 0,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 4',
            occupied: 1,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 5',
            occupied: 0,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 6',
            occupied: 1,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 7',
            occupied: 0,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 8',
            occupied: 1,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 9',
            occupied: 0,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 10',
            occupied: 1,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 11',
            occupied: 0,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 12',       
            occupied: 1,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 13',
            occupied: 0,
            icon: mdiCar

          },
          {
            parking_space_name: 'Parking 14',
            occupied: 1,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 15',
            occupied: 0,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 16',
            occupied: 1,
            icon: mdiCar

          },
          //continue untill parking 25
          {
            parking_space_name: 'Parking 17',
            occupied: 0,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 18',
            occupied: 1,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 19',
            occupied: 0,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 20',
            occupied: 1,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 21',
            occupied: 0,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 22',
            occupied: 1,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 23',
            occupied: 0,
            icon: mdiCar
          },
          {
            parking_space_name: 'Parking 24',
            occupied: 1,
            icon: mdiCar
          },
        ]
      }
    }
  }
  </script>
  <style>


  </style>