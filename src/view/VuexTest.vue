<template>
  <div>
    {{ $store.state.count }}
    <button @click="testButton">测试</button>
  </div>
</template>

<script>

  export default {
    methods: {
      testButton: function () {
        console.log(this.$store.state.count)
        this.$store.commit('increment')
      }
    }
  }
</script>
