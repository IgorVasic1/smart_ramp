<template>
  <v-row>
    <v-col class="pa-0" cols="2" lg="2" md="2">
      <slot name="square" />
    </v-col>
    <v-col cols="10" md="10" v-if="this.$route.name === 'dashboard'">
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
    <v-col class="pa-0" v-else-if="this.$route.name ==='users'">
      <v-col class="pa-0" cols="12" md="12">
          <slot name="users-table" />
        </v-col>
        <v-col>
              <slot name="speed-dial" />
        </v-col>
    </v-col>
    <v-col class="pa-0" v-else-if="this.$route.name ==='cars'">
      <v-col class="pa-0" cols="12" md="12">
          <slot name="cars-table" />
        </v-col>
        <v-col>
              <slot name="speed-dial" />
        </v-col>
    </v-col>
    <v-col class="pa-0" v-else-if="this.$route.name ==='user'">
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
