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
  <div class="wine">
    <div class="container mx-auto">
      <div class="text-blue text-3xl">
        {{ $t(props.wine + '.name') }}
      </div>
    </div>
    <img v-bind:src="`/images/${props.wine}.jpg`" class="mx-auto" />
    <input type="radio" name="accordion" checked="checked" v-bind:id="ids.description" />
    <label class="item pt-2" v-bind:for="ids.description">
      <div class="title">
        <b> {{ $t('message.wine') }}</b>
      </div>
      <div class="content text-blue font-serif text-sm">
        {{ $t(props.wine + '.description') }}
      </div></label
    >
    <input type="radio" name="accordion" checked="checked" v-bind:id="ids.grapes" />
    <label class="item" v-bind:for="ids.grapes">
      <div class="title">
        <b> {{ $t('message.grapes') }}</b>
      </div>
      <div class="content text-blue font-serif text-sm">
        {{ $t(props.wine + '.grapes') }}
      </div></label
    >
    <input type="radio" name="accordion" checked="checked" v-bind:id="ids.method" />
    <label class="item" v-bind:for="ids.method">
      <div class="title">
        <b> {{ $t('message.winemaking') }}</b>
      </div>
      <div class="content text-blue font-serif text-sm">
        {{ $t(props.wine + '.method') }}
      </div></label
    >
    <input type="radio" name="accordion" checked="checked" v-bind:id="ids.label" />
    <label class="item" v-bind:for="ids.label">
      <div class="title">
        <b> {{ $t('message.label') }}</b>
      </div>
      <div class="content text-blue font-serif text-sm">{{ $t(props.wine + '.label') }}</div></label
    >
  </div>
</template>

<style scoped>
img {
  width: 100%;
}
.wine {
  width: 30vw;
}
input[type='radio'] {
  display: none;
  &:checked + .item {
    .title {
      color: #e3ebe4ff;
      border-color: #3b1d5eff;
      background-color: #00afccff;
      &:after {
        transform: rotate(180deg);
      }
    }
    .content {
      margin-top: 0.3rem;
      margin-bottom: 0.3rem;
      height: auto;
      opacity: 1;
      visibility: visible;
      transition:
        all 0.3s,
        opacity 0.7s;
    }
  }
}
.item {
  display: block;
  margin-bottom: 0.1rem;
}
.title {
  padding: 0.1rem 0.3rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:after {
    content: '\25bc';
    display: inline-block;
    font-size: 12px;
  }
}
.content {
  width: 95%;
  margin: 0 auto;
  padding: 0 0.3rem;
  line-height: 1.6;
  border: 1px solid;
  border-width: 0 1px;
  border-color: #00afccff;
  height: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;
}
</style>
