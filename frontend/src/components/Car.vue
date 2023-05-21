<template>
    <v-card outlined class="mt-3">
      <v-card-title class="text-h5">Car Information</v-card-title>
      <v-card-text class="pb-10">
        <v-list dense>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Year:</v-list-item-title>
              <v-list-item-subtitle>{{ car.year }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Model:</v-list-item-title>
              <v-list-item-subtitle>{{ car.model }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Registration Plate:</v-list-item-title>
              <v-list-item-subtitle>{{ car.plate }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Color:</v-list-item-title>
              <v-list-item-subtitle>{{ car.color }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'CarInfoCard',
    data() {
      return {
        car: {
          year: '2018',
          model: 'Toyota Camry',
          plate: 'ABC-123',
          color: 'Red',
        }
      }
    }
  }
  </script>
  
  <style>
  .car-info-card {
    width: 400px;
    margin: 16px;
  }
  </style>
  