<template>
  <div class="app">
    <h2>我是App组件</h2>
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <!-- <template v-slot:fallback> -->
        <!-- <h2>加载中......</h2> -->
      <!-- </template> -->
    </Suspense>
  </div>
</template>

<script setup lang="ts" name="App">
  import {Suspense} from 'vue'
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