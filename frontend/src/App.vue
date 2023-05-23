<template>
  <v-app >
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
};
</script>
<style>
::-webkit-scrollbar {
    width: 0 !important;
  }
</style>
