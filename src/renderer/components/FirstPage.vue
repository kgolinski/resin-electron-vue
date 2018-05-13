<template>
  <div>
    <h1>{{ msg }}</h1>
    Hello {{ $route.params.name }}
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'First Page'
    }
  }
}
</script>
