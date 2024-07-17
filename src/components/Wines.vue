<script setup lang="ts">
import Ocean from './Ocean.vue'
import Wine from './Wine.vue'
</script>

<template>
    <div id="wines" class="w-full mx-auto">
        <div class="text-red text-6xl mx-auto p-12 text-center">{{ $t('message.wines') }}</div>
        <div class="flex flex-col gap-12 lg:w-4/6 mx-auto">
            <Wine
            v-for="wine in ['balenaazzurra2023', 'polpogiallo2023']"
            v-bind:key="wine"
            :wine="wine"
            class="pt-12"
            ></Wine>
        </div>
        <Ocean></Ocean>
    </div>
</template>

<style scoped>
#wines {
    background-image: linear-gradient(rgba(0,175,206,0.2), rgba(0,175,206,0.2));;
}
</style>
