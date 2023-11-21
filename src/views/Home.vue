<template>
  <v-container class="main pa-0" fluid>
    <Banner class="banner-section" />

    <About class="about-section" />
    <Languages class="languages-section" />

    <div class="wip-warning"> 
      <h1 class="text-h2 mx-3"> { </h1>
        <code>The following section is a WIP, thank you for bearing with me</code>
      <h1 class="text-h2 mx-3"> } </h1>
    </div>
    <v-row justify="center">
      <v-col cols="11" md="10">
        <Work class="work-section"/>
        <Lab class="labs-section"/> 
      </v-col>
    </v-row>
    <button
      color="info"
      class="scroll-to-top-btn"
      ref="scrollTopBtnRef"
      @click="scrollTopFn"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </button>
  </v-container>
</template>

<script lang="ts" setup>
import Banner from "@/components/Banner.vue";
import About from "@/components/About.vue";
import Languages from "@/components/LanguagesCarousel.vue";
import Work from "@/components/Work.vue";
import Lab from "@/components/Lab.vue";

import { ref } from "vue";

const scrollTopBtnRef = ref(null);

window.onscroll = function () {
  scrollFn();
};

const scrollFn = () => {
  const scrollTopBtn: HTMLElement | null = scrollTopBtnRef.value;

  if (!scrollTopBtn) return;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    (scrollTopBtn as HTMLElement).style.display = "block";
  } else {
    (scrollTopBtn as HTMLElement).style.display = "none";
  }
};

const scrollTopFn = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style lang="scss" scoped>
.main {
  scroll-behavior: smooth;
  .about-section {
    margin-bottom: 120px;

    @media screen and (min-width: 600px) {
      margin-top: 200px;
      margin-bottom: 80px;
    }

    @media screen and (min-width: 960px) {
      margin-top: 120px;
    }
  }

  .languages-section {
    margin-bottom: 120px;
    @media screen and (min-width: 600px) {
      margin-bottom: 80px;
    }

    @media screen and (min-width: 960px) {
      margin-bottom: 60px;
    }
  }

  .wip-warning {
    display: flex; 
    min-width: 100%;
    background: rgba(0,0,0,0.2);
    padding: 20px 0; 
    margin: 60px 0 60px 0;
    align-items: center;
    justify-content: space-around;
    code { 
      text-align: centered;
    }
  }

  .work-section {
    margin-bottom: 120px;
    @media screen and (min-width: 600px) {
      margin-bottom: 80px;
    }

    @media screen and (min-width: 960px) {
      margin-bottom: 60px;
    }
  }

  .labs-section {
    margin-bottom: 120px;
    @media screen and (min-width: 600px) {
      margin-bottom: 80px;
    }

    @media screen and (min-width: 960px) {
      margin-bottom: 60px;
    }
  }

  .scroll-to-top-btn {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    font-size: 18px;
    border: none;
    outline: none;
    background-color: #f7dfb3;
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 4px;
    animation: fade-in 0.35 ease-in-out;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
