<template>
  <div class="news">
    <ul>
      <li><a href="#">新闻001</a></li>
      <li><a href="#">新闻002</a></li>
      <li><a href="#">新闻003</a></li>
      <li><a href="#">新闻004</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="News">
  
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}
.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>