<template>
  <v-row> 
    <div class="carousel">
      <div class="slide" v-for="n in 2" :key="n"> 
        <img v-for="logo in logos" :key="logo.alt" :src="logo.icon" :alt="logo.alt" />
      </div>
      <p class="text-center text-caption">(*Mostly*) Pure CSS</p>
    </div>
  </v-row>
</template>

<script setup lang="ts"> 
import { logos } from "@/assets/language-icons"
</script>

<style scoped lang="scss">
.carousel {
  box-sizing: border-box;
  background: rgba(0,0,0,0.1);
  overflow-x: hidden;
  padding: 28px 0;
  position: relative;
  white-space: nowrap;
  mask: 
    linear-gradient(to left, transparent 1%, #fff 15% 90%, transparent 100%), 
    linear-gradient(to right, transparent 1%, #fff 15% 90%, transparent 100%);
  -webkit-mask: 
    linear-gradient(to left, transparent 1%, #fff 15% 90%, transparent 100%), 
    linear-gradient(to right, transparent 1%, #fff 15% 90%, transparent 100%);
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  z-index: 99999;
  .slide { 
    display: inline-flex;
    align-items: center;
    animation: 35s slide infinite linear;

    img {
      margin: 0 30px;
      width: 120px;
      object-fit: contain;
      object-position: 50% 50%;
    } 
  }
  &:hover .slide{
    animation-play-state: paused;
  }
  p {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
