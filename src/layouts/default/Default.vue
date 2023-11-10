<template>
  <v-app>
    <default-nav :drawer="drawer" />
    <default-bar @toggleNav="drawer = !drawer" />

    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultNav from './Navigation.vue'
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'

  import { ref, watchEffect } from "vue";

  const drawer = ref(false)
</script>
