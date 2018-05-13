<template>
  <div>
    <h1>{{ msg }}</h1>
    ID: {{ $route.params.id }}
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Second Page'
    }
  }
}
</script>
