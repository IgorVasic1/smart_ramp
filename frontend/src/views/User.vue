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
         <Profile  slot="section-one" />
         <Car slot="section-two" />
      </TemplateFeed>
    </div>
  </template>
  <script>

  import TemplateFeed from "@/layouts/TemplateFeed";
  import WeatherPanel from "@/components/WeatherPanel";
  import Profile from "@/components/Profile";
  import Car from "@/components/Car";
  export default {
    components: {
    TemplateFeed,
    WeatherPanel,
    Profile,
    Car
},
 
    
 
  };
  </script>
  
  <style scoped>
  .device-card {
    border-radius: 0px;
    border-top: none;
  }
  </style>
