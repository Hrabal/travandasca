<script setup lang="ts">
import Logo from './Logo.vue';
import Ocean from './Ocean.vue';
</script>

<template>
  <div class="mx-auto w-screen">
    <Logo></Logo>
    <div class="mx-auto p-6 lg:p-12">
      <div class="text-sea text-2xl lg:text-5xl pt-12 lg:w-4/6 mx-auto text-justify">
        {{ $t('message.title') }}
      </div>
      <div class="text-blue font-serif pt-12 lg:text-2xl lg:w-3/5 mx-auto">
        {{ $t('message.presentation') }}
      </div>
    </div>
    <Ocean></Ocean>
  </div>
</template>

<style scoped></style>
