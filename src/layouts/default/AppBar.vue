<template>
  <v-app-bar flat color="transparent">
    <template v-slot:prepend> 
      <v-app-bar-nav-icon color="primary" @click="$emit('toggleNav')" /> 
    </template>

    <template v-slot:append> 
      <v-switch v-model="darkMode" color="secondary"></v-switch>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
  import { useTheme } from 'vuetify'
  import { ref, watch, onMounted } from 'vue' 

  const darkModeLocalValue = window.localStorage.getItem("darkMode")
  const darkMode = darkModeLocalValue ? ref(darkModeLocalValue == "dark") : ref(true)
  const theme = useTheme()

  watch(darkMode, async (newVal) => {
    theme.global.name.value = newVal ? 'dark' : 'light'
    window.localStorage.setItem("darkMode", newVal ? 'dark' : 'light')
  })

  onMounted(() => {
    if (darkModeLocalValue) {
      theme.global.name.value = darkModeLocalValue
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          theme.global.name.value = "dark"
    }
  })
</script>
