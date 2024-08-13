import { customRef } from "vue";

export default function(initValue:string,delay:number){
  // 使用Vue提供的customRef定义响应式数据
  let timer:number
  // track(跟踪)、trigger(触发)
  let msg = customRef((track,trigger)=>{
    return {
      // get何时调用？—— msg被读取时
      get(){
        track() //告诉Vue数据msg很重要，你要对msg进行持续关注，一旦msg变化就去更新
        return initValue
      },
      // set何时调用？—— msg被修改时
      set(value){
        clearTimeout(timer)
        timer = setTimeout(() => {
          initValue = value
          trigger() //通知Vue一下数据msg变化了
        }, delay);
      }
    }
  })
  return {msg}
}