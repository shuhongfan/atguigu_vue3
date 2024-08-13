<template>
  <div class="app">
    <h2>我是App组件{{ x }}</h2>
    <Hello/>
    <Child/>
  </div>
</template>

<script setup lang="ts" name="App">
  import Child from './Child.vue'
</script>

<style>
  .app {
    background-color: #ddd;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>