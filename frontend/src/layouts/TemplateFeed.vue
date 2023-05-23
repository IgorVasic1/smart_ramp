<template>
  <v-row>
    <v-col class="pa-0" cols="2" lg="2" md="2" v-if="isLargeScreen">
      <slot name="square" />
    </v-col>
    <v-col :cols="getColumnSize()" v-if="isDashboardView">
      <v-row>
        <v-col class="pa-0" cols="12" md="6">
          <slot name="square1" />
        </v-col>
        <v-col class="pa-0" cols="12" md="6">
          <slot name="square2" />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pa-0" cols="12" md="12">
          <slot name="square3" />
        </v-col>
      </v-row>
    </v-col>
    <v-col class="pa-0" v-else-if="isUsersView || isCarsView">
      <v-col class="pa-0" cols="12" md="12">
        <slot :name="getContentSlotName()" />
      </v-col>
      <v-col>
        <slot name="speed-dial" />
      </v-col>
    </v-col>
    <v-col class="pa-0" v-else-if="isUserView">
      <v-row>
        <v-col class="pr-0" cols="12" md="4">
          <slot name="section-one" />
        </v-col>
        <v-col class="pa-0" cols="12" md="8">
          <slot name="section-two" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    isLargeScreen() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
    isDashboardView() {
      return this.$route.name === 'dashboard';
    },
    isUsersView() {
      return this.$route.name === 'users';
    },
    isCarsView() {
      return this.$route.name === 'cars';
    },
    isUserView() {
      return this.$route.name === 'user';
    },
  },
  methods: {
    getColumnSize() {
      return this.isLargeScreen ? 10 : 12;
    },
    getContentSlotName() {
      return this.isCarsView ? 'cars-table' : 'users-table';
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  /* Adjust layout for small screens */
  .pa-0 {
    padding: 0 !important;
  }
  /* Example of adjusting the width of a column */
  .v-col {
    width: 100% !important;
  }
}
</style>
