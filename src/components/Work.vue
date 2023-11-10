<template>
  <v-row>
    <v-col cols="12">
      <p class="text-h3 text-primary font-weight-bold ml-15">Work /></p>
    </v-col>
    <v-col>
      <v-timeline align="start">
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :dot-color="year.color"
          size="small"
        >
          <template v-slot:opposite>
            <div
              :class="`pt-1 headline font-weight-bold text-${year.color}`"
              v-text="year.year"
            ></div>
          </template>
          <div>
            <h2
              :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`"
            >
              {{ year.topic }}
            </h2>
            <div>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              scaevola imperdiet nec ut, sed euismod convenire principes at. Est
              et nobis iisque percipit, an vim zril disputando voluptatibus, vix
              an salutandi sententiae.
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const years = [
  {
    color: "cyan",
    year: "2015",
    topic: "Coding Dojo Bootcamp",
    content: "",
  },
  {
    color: "green",
    year: "2016",
    topic: "Coding Dojo - Teaching Assistant",
    content: "",
  },
  {
    color: "pink",
    year: "2017",
    topic: "",
    content: "",
  },
  {
    color: "amber",
    year: "2018",
    topic: "",
    content: "",
  },
  {
    color: "orange",
    year: "2019",
    topic: "",
    content: "",
  },
  {
    color: "primary",
    year: "2020",
    topic: "",
    content: "",
  },
  {
    color: "success",
    year: "2021",
    topic: "",
    content: "",
  },
  {
    color: "info",
    year: "2022",
    topic: "",
    content: "",
  },
  {
    color: "warning",
    year: "2023",
    topic: "",
    content: "",
  },
];
</script>
