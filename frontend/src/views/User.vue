<template>
  <div>
    <TemplateFeed>
      <WeatherPanel class="pa-0" slot="square" />
      <Profile class="pa-6 ml-3 mt-14" slot="section-one" />
      <Car class="pa-6 mt-14" slot="section-two" />
    </TemplateFeed>
  </div>
</template>

<script>
import { mdiMenu } from "@mdi/js";
import TemplateFeed from "@/layouts/TemplateFeed";
import WeatherPanel from "@/components/WeatherPanel";
import Profile from "@/components/Profile";
import Car from "@/components/Car";

export default {
  components: {
    TemplateFeed,
    WeatherPanel,
    Profile,
    Car,
  },
  data: function () {
    return {
      icon: {
        mdiMenu: mdiMenu,
      },
      tabs: [
      { name: 'Prikaz Podataka', to: '/dashboard' },
        { name: 'Profil', to: '/users' },
        { name: 'Automobili', to: '/cars' },
        { name: 'Korisnici', to: '/user' },
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
    color() {
      return this.$vuetify.theme.dark ? '#ECEFF1' : 'gray';
    }
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
