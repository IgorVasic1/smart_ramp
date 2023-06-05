 <template>
    <v-text-field
      class="search-bar"
      outlined
      dense
      :append-icon="icons.search"
      :style="{ backgroundColor: backgroundColor }"
      :dark="isDarkTheme"
      color="primary"
      label="Search"
    ></v-text-field>
  </template>
  
  <script>
  import { mdiMagnify } from '@mdi/js';
  
  export default {
    name: "Search",
    data: () => ({
      search: "",
      icons: {
        search: mdiMagnify,
      },
    }),
    computed: {
      backgroundColor() {
        return this.$vuetify.theme.dark ? "#212121" : "#fff";
      },
      isDarkTheme() {
        return this.$vuetify.theme.dark;
      },
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    width: 100%;
    height: 40px;
  }
  
  .v-text-field--outlined >>> fieldset {
    border-color: #424242;
}

  </style>
  