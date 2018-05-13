<template>
  <div id="animated-number-demo">
    <input v-model.number="number" type="number" step="200">
    <p>{{ animatedNumber }}</p>
  </div>
</template>
<script>
import TweenLite from 'gsap'
export default {
  name: 'Animation',
  data: function () {
    return {
      number: 0, // TODO: add this to the store
      tweenedNumber: 0
    }
  },
  computed: {
    animatedNumber: function () {
      return this.tweenedNumber.toFixed(0)
    }
  },
  watch: {
    number: function (newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
