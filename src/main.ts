import {createApp} from 'vue'
import App from './App.vue'
import Hello from './Hello.vue'

// 创建应用
const app = createApp(App)

app.component('Hello',Hello)
app.config.globalProperties.x = 99

declare module 'vue' {
  interface ComponentCustomProperties {
    x:number
  }
}
app.directive('beauty',(element,{value})=>{
  element.innerText += value
  element.style.color = 'green'
  element.style.backgroundColor = 'yellow'
})

// 挂载应用
app.mount('#app')

setTimeout(() => {
  app.unmount()
}, 2000);