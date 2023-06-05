<template>
    <div>
      <left-sidebar v-if="this.$route.path!=='/'"/>
      <v-main class="container-padding  overflow-y-lg-hidden">
        <v-container class="pt-0" fluid>
          <v-row>
        <v-tabs
        style="position: absolute;" height="250px" class="custom-tabs"
        >
          <v-col class="pt-8">
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
          <router-view></router-view>
        </v-container>
      </v-main>
    </div>
  </template>
  
  <script>
  import LeftSidebar from '../components/LeftSidebar';
  import {mapGetters} from "vuex";
  export default {
    name: 'TemplateDefault',
    components: {
      LeftSidebar,

    },
    data: () => ({
      noSidebarRoutes: ['Register',  'Login']
    }),
    computed: {
      ...mapGetters({"accountModal": "accounts/accountModal"})
    },
    components: {
      LeftSidebar,
     

    },
  };
  </script>
  
  <style>
  .container-padding {
    padding: 0 64px 0 100px;
  }
  @media only screen and (min-width: 1264px) {
    .overflow-y-lg-hidden {
      max-height: 100vh;
      overflow-y: hidden;
    }
  }
  @media only screen and (max-width: 600px) {
    .container-padding {
      padding: 0 !important;
    }
  }
  .custom-tabs .v-slide-group__wrapper {
  background-color: #184264d9;
}
  </style>