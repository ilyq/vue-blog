<template>
  <div>
    <mu-appbar title="Muse UI"/>
    <mu-list>
<!--       <router-link :to="{name: 'AdminIndex'}">
        <mu-list-item title="主页"/>
      </router-link> -->
      <router-link :to="{name: 'Article'}">
        <mu-list-item title="文章"/>
      </router-link>
<!--       <router-link :to="{name: 'Tag'}">
        <mu-list-item title="标签"/>
      </router-link> -->
      <router-link :to="{name: 'Classify'}">
        <mu-list-item title="分类"/>
      </router-link>
    </mu-list>
  </div>
</template>

<script>
  export default {
    name: 'drawer'
  }
</script>
