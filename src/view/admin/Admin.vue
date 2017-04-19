<template>
  <div class="admin">
    <div class="app-bar" v-bind:class="{appBarActive: appBarActive}">
      <mu-appbar title="Admin">
        <mu-icon-button icon='menu' slot="left" @click.native="toggle()"/>
        <mu-flat-button v-show="access_token" color="white" label="退出" slot="right" @click.native="logout_fun"/>
      </mu-appbar>
    </div>
    <div class="app-drawer" v-bind:class="{appDrawer: appDrawer}">
      <mu-drawer :open="open" @close="toggle()">
        <drawer-lit></drawer-lit>
      </mu-drawer>
    </div>
    <div class="content" v-bind:class="{contentActive: contentActive}">
      <mu-paper class="demo-paper" :zDepth="2">
        <router-view></router-view>
      </mu-paper>
    </div>
  </div>
</template>

<script>
  import Content from '@/view/admin/Content.vue'
  import Drawer from '@/view/admin/Drawer.vue'
  import * as types from '@/store/types'
  import {mapState} from 'vuex'

  export default {
    name: 'Admin',
    components: {
      'content-item': Content,
      'drawer-lit': Drawer
    },
    data () {
      return {
        open: true,
        appBarActive: true,
        contentActive: true,
        appDrawer: false,
        screenWidth: document.body.clientWidth
      }
    },
    created: function () {
      console.log(this.screenWidth)
      if (this.screenWidth < 993) {
        this.changeState()
      }
    },
    computed: mapState({
      access_token: state => state.access_token
    }),
    methods: {
      toggle () {
        this.changeState()
      },
      changeState () {
        this.open = !this.open
        this.appBarActive = !this.appBarActive
        this.appDrawer = !this.appDrawer
        this.contentActive = !this.contentActive
      },
      logout_fun () {
        this.$store.commit(types.LOGOUT)
        this.$router.push({
          name: 'Index'
        })
      }
    }
  }
</script>

<style lang="css">
  .app-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: auto;
  }
  .appBarActive {
    left: 256px;
  }
  .app-drawer {
    width: 256px;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: auto;
    border-radius: 0;
    z-index: 200;
    /*visibility: hidden;*/
  }
  .appDrawer {
    transform: translateZ(0);
  }
  .content {
    padding-left: 10px;
    padding-top: 75px;
    padding-right: 10px;
    padding-bottom: 20px;
  }
  .contentActive {
    padding-left: 266px;
  }
  @media (max-width: 993px) {
    .content {
      padding-left: 10px;
    }
  }
  .demo-paper {
    display: inline-block;
    height: 100%;
    width: 100%;
  }
</style>
