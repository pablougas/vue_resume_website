<template>
  <v-sheet class="about">
    <v-card
      :color="
        theme.global.current.value.dark ? 'cyan-darken-4' : 'cyan-lighten-4'
      "
      variant="flat"
      :class="{ 'px-15': lgAndUp }"
      class="pt-15 pb-10"
    >
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" class="about-content hidden-md-and-up pb-0">
              <h1 class="text-h1 font-weight-bold banner mb-0">Hello!</h1>
            </v-col>
            <v-col cols="12" md="5" lg="4" class="d-flex justify-end">
              <img class="img" src="../assets/kayce_and_pablo.jpeg" />
            </v-col>
            <v-col cols="12" md="7" lg="8" class="about-content">
              <h1 class="text-h1 font-weight-bold banner hidden-sm-and-down">
                Hello!
              </h1>
              <v-card
                :class="{ 'px-15': lgAndUp }"
                variant="flat"
                rounded="xl"
                min-height="100%"
                color="transparent"
              >
                <v-card-text>
                  <p class="about-me">
                    Hi! My name is Pablo Ugas and I am a Full-Stack Software
                    Engineer that has been programming since 2015. I was born in
                    Lima, Peru and while I've lived in many states, currently
                    live in the beautiful city of Coeur D'Alene, Idaho since
                    2020.
                    <br />
                    <br />
                    My wife and I have 2 boys and a little baby girl that was
                    born in 2022. Some of my favorite things are traveling,
                    soccer, snowboarding, architecture, building pretty much
                    anything, hiking, camping, fly fishing and cooking.
                    <br />
                    <br />
                    While I enjoy building features from front to back, I really
                    enjoy working on the Front End and seeing designs and
                    applications come to life!
                    <br />
                    <br />
                    <span class="text-caption" style="line-height: 12px;">
                      This site was built using the new Vue 3 composition API
                      using Typescript and Vuetify.
                    </span>
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import { useDisplay } from "vuetify";
const theme = useTheme();

const { lgAndUp } = useDisplay();
</script>

<style lang="scss" scoped>
.about {
  min-width: 100vw;
  .img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
  .about-content {
    position: relative;

    .banner {
      opacity: 20%;

      @media screen and (min-width: 960px) {
        position: absolute;
        top: -60px;
        right: 25px;
      }
    }
  }
  .about-me {
    font-size: 1.5em;
    line-height: 1.5em;
    font-weight: 600;
  }
}
</style>
