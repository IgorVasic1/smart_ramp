<template>
    <v-card id="create">
      <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
      >
        <template v-slot:activator>
          <v-btn
            v-model="fab"
            color="#003e76"
            dark
            fab
          >
            <v-icon v-if="fab">
              {{ icons.mdiClose }}
            </v-icon>
          <v-icon>{{ currentIconClass }}</v-icon>
          </v-btn>
        </template> 
        <v-btn
          fab
          dark
          size="small"
          color="indigo"
        >
          <v-icon>{{ icons.mdiPlus }}</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          size="small"
          color="red"
        >
          <v-icon>{{ icons.mdiDelete }}</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-card>
  </template>
  
  <script>
  import { mdiAccountCircle, mdiPencil, mdiPlus, mdiDelete, mdiCar } from '@mdi/js'
    export default {
      data: () => ({
        direction: 'top',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        top: false,
        right: true,
        bottom: true,
        left: false,
        transition: 'slide-y-reverse-transition',
        icons: {
          mdiAccountCircle: mdiAccountCircle,
          mdiPencil: mdiPencil,
          mdiPlus: mdiPlus,
          mdiDelete: mdiDelete,
          mdiCar: mdiCar
        },
    
    }),

        computed: {
            currentRouteName() {
            return this.$route.name; 
            },
            currentIconClass() {
            return this.currentRouteName === "cars" ? "mdi-car" : "mdi-account-circle";
            }
        },
  
      watch: {
        top (val) {
          this.bottom = !val
        },
        right (val) {
          this.left = !val
        },
        bottom (val) {
          this.top = !val
        },
        left (val) {
          this.right = !val
        },
      },
    }
  </script>
  
  <style>
    /* This is for documentation purposes and will not be needed in your application */
    #create .v-speed-dial {
      position: absolute;
    }
  
    #create .v-btn--floating {
      position: relative;
    }
  </style>