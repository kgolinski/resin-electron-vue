<template>
  <div class="counter">
    <p class="display">{{ count }}</p>
    <div class="buttons">
      <button class="increment" @click="increment">+</button>
      <button class="decrement" @click="decrement">-</button>
      <button class="reset" @click="reset">reset</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Counter',
  data () {
    return {}
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    },
    reset () {
      this.$store.commit('reset')
    }
  }
}
</script>
<style lang="scss" scoped>
button {
  background-color: #42b983;
  border: 0;
  border-radius: 2px;
  color: white;
  display: inline-block;
  font-size: 16px;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: lighten(#42b983, 20);
  }

  &:active {
    background-color: darken(#42b983, 20);
  }
}
</style>
