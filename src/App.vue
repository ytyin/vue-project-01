<template>
  <div id="app">
    <header>
      <img width="20" height="20"  style="display:inline-block;" alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </header>
    <h2>Chinese English Placeholder</h2>
    <div class="placeholders-wrapper">
      <zhEnPlaceholder
        ownClassName="welcome-tips"
        topTip="欢迎来到我的组件库"
        bottomTip="welcome to my component library welcome to my component library"
      />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import zhEnPlaceholder from 'yyt-components'

export default {
  name: 'App',
  components: {
    HelloWorld,
    zhEnPlaceholder
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 5px;
  }
  .placeholders-wrapper{
    display: flex;
    justify-content: center;
  }
</style>
