<template>
    <div>
      <left-sidebar v-if="this.$route.path!=='/'"/>
      <v-main class="container-padding  overflow-y-lg-hidden">
        <v-container class="pt-0" fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
      <right-sidebar v-if="this.$route.path!=='/'"/>
    </div>
  </template>
  
  <script>
  import RightSidebar from '../components/RightSidebar';
  import LeftSidebar from '../components/LeftSidebar';
  import {mapGetters} from "vuex";
  export default {
    name: 'TemplateDefault',
    components: {
      LeftSidebar,
      RightSidebar,

    },
    data: () => ({
      noSidebarRoutes: ['Register',  'Login']
    }),
    computed: {
      ...mapGetters({"accountModal": "accounts/accountModal"})
    },
    components: {
      LeftSidebar,
      RightSidebar,

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
  </style>