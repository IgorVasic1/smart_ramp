<template>
    <v-navigation-drawer
        app
        color="#003e76"
        width="100"
        dark
        class="nav-drawer"
        mobile-breakpoint="600"
    ><!--Add avatar above list with avatar.png inside -->
    <v-list
          dense
          nav
          class="py-1"
      >
        <v-list-item class="pl-2">
          <v-list-item-avatar outlined size="65" @click="toggleModal" style="cursor: pointer">
            <img
                src="../assets/avatar.png"
                alt="avatar"/>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
      <v-list class="pa-0">
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            router
            class="nav-list"
            active-class="bg-color"
            :to="item.route"
        >
        <v-list-item-content class="py-2">
            <v-icon class="mb-2">
              {{ item.icon }}
            </v-icon>
            <v-list-item-title class="caption font-weight-medium text-center">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  <script>
  import { mdiAccountMultiple, mdiMonitorDashboard, mdiCar, mdiAccount} from "@mdi/js";
  export default {
    data() {
      return {
        items: [
          {
            index:0,
            title: "Prikaz",
            icon: mdiMonitorDashboard,
            route: "/dashboard"
          },
          {
            index: 1,
            title: "Korisnici",
            icon: mdiAccountMultiple,
            route: "/users"
          },
          {
            index: 2,
            title: "Automobili",
            icon: mdiCar,
            route: "/cars"
          },
          {
            index: 3,
            title: "Profil",
            icon: mdiAccount,
            route: "/user"
          },
        ],
      };
    },
    watch: {},
    computed: {
     routeName() {
       return this.$route.name;
     },
    },
  };
  </script>
  
  <style
      lang="scss"
      scoped>
  .nav-list {
    height: 64px;
  }
  .bg-color {
  background-color: rgba(255, 255, 255, 0.08);
}
  
 
  .bgrd_color {
    background-color:var(--v-blackish-base);
  }
  
  .v-navigation-drawer {
    z-index: 999;
  }
  
  ::v-deep {
    .v-list-item--active::before {
      display: none;
    }
  }
  
  .nav-drawer {
    z-index: 900;
  }
  </style>