<template>
  <div class="person">
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}，{{nl}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {reactive,toRefs,toRef} from 'vue'

  // 数据
  let person = reactive({
    name:'张三',
    age:18
  })

  // 使用toRefs从person这个响应式对象中，解构出name、age，且name和age依然是响应式的
  // name和age的值是ref类型，其value值指向的是person.name和person.age
  let {name,age} = toRefs(person)
  let nl = toRef(person,'age')
  
  console.log(nl.value)

  // 方法
  function changeName(){
    name.value += '~'
    console.log(name.value,person.name)
  }
  function changeAge(){
    age.value += 1
  }

</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
</style>