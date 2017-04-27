<template>
    <div class="about">
        <head-item></head-item>
        <div>
          <h1>by dong</h1>
        </div>
    </div>
</template>

<script>
import Head from '@/view/index/Head'
export default {
  name: 'about',
  components: {
    'head-item': Head
  },
  data () {
    return {
      screenHeight: document.documentElement.clientHeight
    }
  }
}
</script>

<style>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
}
</style>
