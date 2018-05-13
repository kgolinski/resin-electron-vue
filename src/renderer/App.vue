<template>
  <div id="app">
    <img src="./assets/logo.png" class="logo">
    <div>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/firstroute/Andrzej">First Page</router-link></li>
        <li><router-link to="/firstroute/Andrzej/child">First Page Child</router-link></li>
        <li><router-link to="/secondroute/123">Second Page</router-link></li>
        <li><router-link to="/counter">Counter</router-link></li>
        <li><router-link to="/circles">Circles</router-link></li>
        <li><router-link to="/animation">Animation</router-link></li>
      </ul>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
}

#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 20px;
  text-align: center;
}

.logo {
  width: 100px;
}

ul {
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
  list-style-type: none;
  padding: 10px;
}

li {
  display: inline-block;
  margin: 0 5px;
}

a {
  border-radius: 2px;
  color: #42b983;
  padding: 5px 10px;
  text-decoration: none;

  &.router-link-active {
    background: #42b983;
    color: #fff;
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform .1s ease, opacity .1s ease;
}

.slide-fade-enter {
  opacity: 0;
  transform: translateX(100px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
