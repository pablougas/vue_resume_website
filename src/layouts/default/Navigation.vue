<template>
  <v-navigation-drawer
    v-model="drawer"
    color="grey-darken-2"
    permanent
  >
    <v-list>
      <v-list-item class="title">About</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
const props = defineProps({
  drawer: {
    type: Boolean,
    default: false,
  },
})

const {drawer} = toRefs(props)
</script>
