<template>
    <div>
        <v-row>
        <v-tabs height="100px" style="border-bottom: 1px solid var(--v-borderColor-base);">
             <span class="NSoft-Assets-Devices py-6 mt-5 ml-6">
              {{ this.$route.name }}
          </span>
        </v-tabs>
      </v-row>
      <TemplateFeed>
       <WeatherPanel class="pa-0" slot="square"/>
       <ChartPanel class="pa-0" slot="square1"/>
       <HLS class="pa-0" slot="square2"/>
       <Parking slot="square3"/>
      </TemplateFeed>
    </div>
  </template>
  <script>

  import TemplateFeed from "@/layouts/TemplateFeed";
  import ChartPanel from "@/components/ChartPanel";
  import WeatherPanel from "@/components/WeatherPanel";
  import Parking from "@/components/Parking";
import HLS from "@/components/HLS.vue";
  export default {
    components: {
    TemplateFeed,
    WeatherPanel,
    ChartPanel,
    Parking,
    HLS
},
    data: function() {
        return {
            searchQuery: "",
            timer: null,
            filterTimer: null,
            loadingDevices: false,
            sort: "",
            currentQueryString: "",
            filterDevices: {
            locations: [],
            tags: [],
            types: [],
            enabled: [],
            online: [],
            ordering: "",
            },  
      };
    },
    
 
  };
  </script>
  
  <style scoped>
  .device-card {
    border-radius: 0px;
    border-top: none;
  }
  </style>
