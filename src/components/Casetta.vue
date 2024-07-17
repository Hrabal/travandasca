<script setup lang="ts">
import Ocean from './Ocean.vue'
</script>

<template>
  <div class="mx-auto w-screen pb-12" id="casetta">
    <div class="text-red text-6xl mx-auto pt-12 text-center">
      {{ $t('message.casettaTitle') }}
    </div>
    <div class="flex flex-wrap justify-center lg:pt-12">
      <div class="mx-auto lg:basis-1/3">
        <div
          class="airbnb-embed-frame hidden lg:block pl-24"
          data-id="942426255507671448"
          data-view="home"
          data-hide-price="true"
          style="width: 90%;"
        >
          <a
            href="https://www.airbnb.it/rooms/942426255507671448?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget"
            rel="nofollow"
            >Visto su Airbnb</a
          ><a
            href="https://www.airbnb.it/rooms/942426255507671448?guests=1&amp;adults=1&amp;s=66&amp;source=embed_widget"
            rel="nofollow"
            >Casa · Riomaggiore · ★4.83 · 1 camera da letto · 2 letti · 1 bagno</a
          >
          <component is="script" src="https://www.airbnb.it/embeddable/airbnb_jssdk" async></component>
        </div>
      </div>
      <div class="lg:basis-2/3 lg:pr-24">
        <div class="text-sea text-5xl p-12 lg:pt-24">
          {{ $t('message.casettaName') }}
        </div>    
        <div class="text-blue font-serif lg:text-2xl p-6">
          {{ $t('message.casettaDescription') }}
        </div>
        <div class="lg:hidden mx-auto p-6 text-center">
          <a href="https://www.airbnb.it/rooms/942426255507671448?guests=1&adults=1&s=67&unique_share_id=589bd051-d357-42c8-81cc-26c0a4fb28cf" target="_blank">
            <div class="flex flex-col justify-center">
              <div class="mx-auto"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-12">
              <path d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z"/>
            </svg></div>
             
            <span>
            {{ $t('message.casettaLink') }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#casetta {
    background-image: linear-gradient(rgba(0,175,206,0.35), rgba(0,175,206,0.35));;
}
#airBnb {
  margin: 1em !important;
}
</style>
