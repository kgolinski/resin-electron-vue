<template>
  <div>
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" :width="chartWidth" :height="chartHeight">
    <circle v-for="n in $store.state.count" :cy="y" :cx="x(n)" :r="r" :key="n"/>
  </svg>
  <br>
  <router-link to="/counter" tag="button" active-class="">Counter</router-link>
</div>
</template>
<script>
export default {
  name: 'Circles',
  data () {
    return {
      chartHeight: 100,
      chartWidth: 800,
      r: 20,
      margin: 40
    }
  },
  computed: {
    y () {
      return this.chartHeight / 2
    }
  },
  methods: {
    x (i) {
      return this.margin + i * ((this.chartWidth - this.margin * 2) / (this.$store.state.count + 1))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
svg {
  background: #eee;
  display: inline-block;
}

circle {
  fill: #42b983;
}
</style>
