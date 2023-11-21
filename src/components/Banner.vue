<template>
  <v-row align="center" class="banner">
    <div class="banner-img" :class="{ lightOverlay: !theme.global.current.value.dark }" /> 
    <v-col cols="12" md="6" class="px-10 type">
      <p class="text-h3 text-secondary typewriter" ref="typewriterText">Hi.</p>
    </v-col>
    <v-col cols="12" md="6" class="companies">
      <v-card variant="flat" color="transparent" class="px-10">
        <v-container>
          <v-row>
            <v-col cols="4" class="d-flex justify-center align-start">
              <div class="logo paragon" :class="{ logoOverlay: !theme.global.current.value.dark }" />
            </v-col>
            <v-col cols="4" class="d-flex justify-center align-start">
              <div class="logo getty" :class="{ logoOverlay: !theme.global.current.value.dark }" />
            </v-col>
            <v-col cols="4" class="d-flex justify-center align-start">
              <div class="logo istock" :class="{ logoOverlay: !theme.global.current.value.dark }" />
            </v-col>
            <v-col cols="4" class="d-flex justify-center align-start">
              <div class="logo knock" :class="{ logoOverlay: !theme.global.current.value.dark }" />
            </v-col>
            <v-col cols="4" class="d-flex justify-center align-start">
              <div class="logo wa-dor" :class="{ logoOverlay: !theme.global.current.value.dark }" />
            </v-col>
            <v-col cols="4" class="d-flex justify-center align-start">
              <div class="logo prwc" :class="{ logoOverlay: !theme.global.current.value.dark }" />
            </v-col>
            <v-col cols="4" class="d-flex justify-center align-center">
              <div class="logo leasera" :class="{ logoOverlay: !theme.global.current.value.dark }" />
            </v-col>
            <v-col cols="4" class="d-flex justify-center align-start">
              <div class="logo rohinni" :class="{ logoOverlay: !theme.global.current.value.dark }" />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
    <v-btn
      icon
      color="white"
      class="scroll-to-next-btn"
      @click="scrollNextFn"
    >
      <v-icon large>mdi-menu-down</v-icon>
    </v-btn>
  </v-row>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import typewriter from "@/helpers/typewriter";
import { useTheme } from "vuetify";

const theme = useTheme();
const typewriterText = ref();

let initialized = false;
// set up text to print, each item in array is new line
let text = new Array(
  "Hi :)",
  "",
  "My name is Pablo",
  "",
  "I'm a Full-Stack Software Engineer living in the Pacific Northwest"
);

const scrollNextFn = () => {
  const screenHeight = window.innerHeight;
  window.scrollTo({ top: screenHeight, behavior: "smooth" });
};

watchEffect(() => {
  if (typewriterText.value && !initialized) {
    initialized = true;
    const el = typewriterText.value;
    typewriter(el, text);
  } else {
    // not mounted yet, or the element was unmounted (e.g. by v-if)
  }
});
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  min-height: calc(100vh - 64px) !important; 

  @media screen and (min-width: 960px) {
    padding-bottom: 200px;
    max-height: calc(100vh - 64px) !important;
  }

  .banner-img {
    z-index: 0;
    position: absolute;
    width: 100vw;
    height: 100vh; 
    background-color: #303030;
    
    -webkit-mask: url("../assets/banner-bg.png") 0% 0%/contain no-repeat;
    mask: url("../assets/banner-bg.png") 0% 20%/contain no-repeat;

    @media screen and (min-width: 600px) {
      -webkit-mask: url("../assets/banner-bg.png") center top/contain no-repeat;
      mask: url("../assets/banner-bg.png") center top/contain no-repeat;
    }

    @media screen and (min-width: 960px) {
      -webkit-mask: url("../assets/banner-bg.png") center center/contain no-repeat;
      mask: url("../assets/banner-bg.png") center center/contain no-repeat;
    }
  }

  .lightOverlay {
    background-color: rgba(0,0,0,0.10) !important;
  }

  .scroll-to-next-btn {
    animation: fade-in-down 1s ease-in-out;
    animation-delay: 7.5s;
    animation-fill-mode: forwards;
    left: calc(50% - 24px);
    opacity: 0;
    position: absolute;
    top: calc(100vh - 160px);
    z-index: 99;

    @media screen and (min-width: 600px) {
      top: calc(100vh - 164px);
    }

    @media screen and (min-width: 960px) {
      top: unset;
      bottom: 40px;
    }
  }

  .type {
    margin-top: -40px;
    display: flex;
    align-items: center;
    height: calc(100vh - 64px) !important;
    min-height: calc(100vh - 64px) !important;
    z-index: 1;

    .typewriter {
      line-height: 50px;
      font-weight: 600;
    }

    @media screen and (min-width: 960px) {
      margin-top: unset;
      align-items: start;
      min-height: unset !important;
      height: unset !important;
    }
  }
  .companies {
    .logo {
      display: inline-block;
      min-height: 180px;
      width: 100%;
      background: rgb(248, 170, 108);
    }
    .getty {
      -webkit-mask: url("../assets/getty.png") center/contain no-repeat;
      mask: url("../assets/getty.png") center/contain no-repeat;
    }
    .istock {
      -webkit-mask: url("../assets/iStock_logo.png") center/contain no-repeat;
      mask: url("../assets/iStock_logo.png") center/contain no-repeat;
    }
    .paragon {
      -webkit-mask: url("../assets/paragon.png") center/contain no-repeat;
      mask: url("../assets/paragon.png") center/contain no-repeat;
    }

    .knock {
      -webkit-mask: url("../assets/knock.png") center/contain no-repeat;
      mask: url("../assets/knock.png") center/contain no-repeat;
    }

    .prwc {
      -webkit-mask: url("../assets/prwc.png") center/contain no-repeat;
      mask: url("../assets/prwc.png") center/contain no-repeat;
    }

    .wa-dor {
      -webkit-mask: url("../assets/wa-dor.png") center/contain no-repeat;
      mask: url("../assets/wa-dor.png") center/contain no-repeat;
    }

    .leasera {
      -webkit-mask: url("../assets/leasera.svg") center/contain no-repeat;
      mask: url("../assets/leasera.svg") center/contain no-repeat;
    } 

    .rohinni {
      -webkit-mask: url("../assets/rohinni.png") center/contain no-repeat;
      mask: url("../assets/rohinni.png") center/contain no-repeat;
    }
  }

  .logoOverlay {
    background: #cd6540 !important;
  }

  @keyframes fade-in-down {
    0% {
      opacity: 0;
      transform: translateY(-30px);
   }
   100% {
      opacity: 1;
      transform: translateY(0);
   }
  }
}
</style>
