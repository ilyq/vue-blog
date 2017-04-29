<template>
  <div>
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
