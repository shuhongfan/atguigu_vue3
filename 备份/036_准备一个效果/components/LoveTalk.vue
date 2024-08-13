<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{talk.title}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
  import {reactive} from 'vue'
  import axios from "axios";
  import {nanoid} from 'nanoid'
  // 数据
  let talkList = reactive([
    {id:'ftrfasdf01',title:'今天你有点怪，哪里怪？怪好看的！'},
    {id:'ftrfasdf02',title:'草莓、蓝莓、蔓越莓，今天想我了没？'},
    {id:'ftrfasdf03',title:'心里给你留了一块地，我的死心塌地'}
  ])
  // 方法
  async function getLoveTalk(){
    // 发请求，下面这行的写法是：连续解构赋值+重命名
    let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    // 把请求回来的字符串，包装成一个对象
    let obj = {id:nanoid(),title}
    // 放到数组中
    talkList.unshift(obj)
  }
</script>

<style scoped>
  .talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>