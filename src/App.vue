<script setup lang="ts">
import Logo from './components/Logo.vue'
import Presentation from './components/Presentation.vue'
import Wine from './components/Wine.vue'
import Casetta from './components/Casetta.vue'
import Ocean from './components/Ocean.vue'
</script>

<template>
  <div>
    <header></header>

    <main class="flex flex-col mx-auto container gap-8 pb-12">
      <Logo></Logo>
      <Presentation></Presentation>
      <div class="text-red text-3xl mx-auto">{{ $t('message.wines') }}</div>
      <div class="flex gap-8 mx-auto">
        <Wine
          v-for="wine in ['balenaazzurra2023', 'polpogiallo2023']"
          v-bind:key="wine"
          :wine="wine"
        ></Wine>
      </div>
      <Casetta></Casetta>
    </main>
    <Ocean></Ocean>
  </div>
</template>

<style scoped></style>
