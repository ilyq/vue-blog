<template>
  <div class="article">
    <slot name="title"></slot>
    <slot name="updated"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
  export default {
    name: 'article'
  }
</script>

<style>
  .article {
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
</style>
