<script setup lang="ts">
import Presentation from './components/Presentation.vue'
import Wines from './components/Wines.vue'
import Casetta from './components/Casetta.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <main class="flex flex-col bg-white w-full gap-0">
    <Presentation></Presentation>
    <Wines></Wines>
    <Casetta></Casetta>
    <Footer></Footer>
  </main>
</template>

<style scoped></style>
