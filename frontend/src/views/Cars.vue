<template>
  <div>
    <v-row>
      <v-tabs
        height="100px"
        style="border-bottom: 1px solid var(--v-borderColor-base);"
      >
        <v-col class="py-10">
          <span class="heading py-6 mt-5 ml-6">
            {{ this.$route.name === 'cars' ? 'Vozila' : this.$route.name }}
          </span>
        </v-col>
        <v-col class="text-right py-10">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on" v-show="isSmallScreen">
                <v-icon>{{ icon.mdiMenu }}</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(tab, index) in tabs"
                :key="index"
                :to="tab.to"
                exact
              >
                <v-list-item-title>{{ tab.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-tabs>
    </v-row>

    <TemplateFeed>
      <WeatherPanel class="pa-0" slot="square" />
      <CarTable class="pa-0" slot="cars-table" />
      <SpeedDial style="margin-top: 280px;" slot="speed-dial" />
    </TemplateFeed>
  </div>
</template>

<script>
import { mdiMenu } from "@mdi/js";
import TemplateFeed from "@/layouts/TemplateFeed";
import WeatherPanel from "@/components/WeatherPanel";
import CarTable from "@/components/CarTable";
import SpeedDial from "@/components/SpeedDial";

export default {
  components: {
    TemplateFeed,
    WeatherPanel,
    CarTable,
    SpeedDial,
  },
  data: function () {
    return {
      icon: {
        mdiMenu: mdiMenu,
      },
      tabs: [
        { name: "Vozila", to: "/cars" },
        { name: "Dashboard", to: "/dashboard" },
        { name: "Users", to: "/users" },
        { name: "User", to: "/user" },
      ],
      isSmallScreen: false,
    };
  },
  methods: {
    getCurrentTabName() {
      return this.$route.name === 'users' ? 'Korisnici' : this.$route.name;
    },
    updateScreenSize() {
      this.isSmallScreen = window.innerWidth < 600; // Update the value
    },
  },
  computed: {
    isSmallScreen() {
      return this.isSmallScreen; // Return the value from data
    },
  },
  mounted() {
    this.updateScreenSize(); // Initial check
    window.addEventListener('resize', this.updateScreenSize); // Listen for window resize event
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateScreenSize); // Clean up the event listener
  },
};
</script>

<style scoped>
.device-card {
  border-radius: 0px;
  border-top: none;
}

.heading {
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  color: rgba(0, 0, 0, 0.87);
}

.text-right {
  text-align: right;
}
</style>
