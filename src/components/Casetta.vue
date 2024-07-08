<script setup lang="ts"></script>

<template>
  <div class="text-red text-3xl mx-auto">
    {{ $t('message.casettaTitle') }}
  </div>
  <div class="text-blue font-serif text-sm">
    <div>
      {{ $t('message.casettaDescription') }}
    </div>
    <div
      class="airbnb-embed-frame"
      data-id="942426255507671448"
      data-view="home"
      data-hide-price="true"
      style="width: 450px; height: 300px; margin: auto"
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
</template>

<style scoped></style>
