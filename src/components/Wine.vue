<script setup lang="ts">
const props = defineProps(['wine'])
const ids = {
  description: props.wine + 'desc',
  grapes: props.wine + 'grapes',
  method: props.wine + 'method',
  label: props.wine + 'label'
}
</script>

<template>
  <div class="grid lg:grid-cols-2 rounded-lg lg:border border-blue p-6 lg:p-12">
      <div class="text-sea text-5xl text-center">
        <div class="lg:pt-36">

          {{ $t(props.wine + '.name') }}
          <img v-bind:src="`/images/${props.wine}.jpg`" class="mx-auto w-5/6 pt-8" />
        </div>
      </div>
    <div class="pt-6 lg:pt-0">
      <div class="text-blue text-2xl">
        <b> {{ $t('message.wine') }}</b>
      </div>
      <div class="content text-blue font-serif text-lg">
        {{ $t(props.wine + '.description') }}
      </div>
      <div class="text-blue text-2xl  pt-4">
        <b> {{ $t('message.grapes') }}</b>
      </div>
      <div class="content text-blue font-serif text-lg">
        {{ $t(props.wine + '.grapes') }}
      </div>
      <div class="text-blue text-2xl  pt-4">
        <b> {{ $t('message.winemaking') }}</b>
      </div>
      <div class="content text-blue font-serif text-lg">
        {{ $t(props.wine + '.method') }}
      </div>
      <div class="text-blue text-2xl pt-4">
        <b> {{ $t('message.label') }}</b>
      </div>
      <div class="content text-blue font-serif text-lg">{{ $t(props.wine + '.label') }}</div>
    </div>
  </div>
</template>

<style scoped>
</style>
