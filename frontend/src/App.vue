<template>
  <v-app :style="{ backgroundColor: backgroundColor }">
    <template-default/>
  </v-app>
</template>

<script>

import TemplateDefault from "./layouts/TemplateDefault";
export default {
  components: {
    TemplateDefault,
  },
  name: 'App',

  data: () => ({
    //
  }),
  computed: {
    backgroundColor() {
      return this.$vuetify.theme.dark ? '#212121' : '#ECEFF1';
    }
  }
};
</script>
<style>
::-webkit-scrollbar {
    width: 0 !important;
  }
</style>
