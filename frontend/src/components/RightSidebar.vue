<template>
    <v-navigation-drawer
        app
        color="#003e76"
        width="64"
        dark
        right
        mobile-breakpoint="600"
        style="z-index: 999;"
    >
    <v-list
        dense
        nav
        class="py-1"
    >
      <v-list-item class="px-1">
        <v-list-item-avatar tile @click="toggleModal" style="cursor: pointer">
          <img
              src="../assets/parking.png"
              alt="avatar"/>
        </v-list-item-avatar>
      </v-list-item>
      <v-list-item class="px-1" @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-list-item-content>
          <v-icon>{{$vuetify.theme.dark ? icons.mdiDay : icons.mdiNight}}</v-icon>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  import {mapActions} from "vuex";
  import {mdiWeatherNight, mdiWeatherSunset, mdiLocationExit} from "@mdi/js";
  
  export default {
    data() {
      return {
        item: 0,
        icons: {
          mdiLocationExit: mdiLocationExit,
          mdiNight: mdiWeatherNight,
          mdiDay: mdiWeatherSunset,
        }
      };
    },
    methods: {
      ...mapActions({"toggleAccountModal": "accounts/toggleAccountModal"}),
      toggleModal() {
        this.toggleAccountModal();
      }
    }
  };
  </script>
  
  <style scoped>
  </style>