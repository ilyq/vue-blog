<template>
  <div class="article">
    <h2>文章</h2>
    <div class="editor">
      <markdown-editor v-model="content" ref="markdownEditor" :custom-theme="true" :configs="configs"></markdown-editor>
    </div>
    <div class="button">
      <mu-raised-button label="保存" class="save-button" primary @click.native="saveArticle"/>
    </div>
  </div>
</template>

<script>
  // https://github.com/F-loat/vue-simplemde
  import 'simplemde-theme-base/dist/simplemde-theme-base.min.css'
  import { markdownEditor } from 'vue-simplemde'
  export default {
    name: 'article',
    data () {
      return {
        content: '```import os```',
        configs: {
          spellChecker: false,
          indentWithTabs: false,
          renderingConfig: {
            codeSyntaxHighlighting: true,
            highlightingTheme: 'atom-one-dark'
          }
        }
      }
    },
    components: {
      markdownEditor
    },
    computed: {
      simplemde () {
        return this.$refs.markdownEditor.value
      }
    },
    methods: {
      saveArticle: function () {
        console.log(this.content)
      }
    },
    created: function () {
      let id = this.$route.params.id
      console.log(id)
    }
  }
</script>

<style>
  .article {
    padding: 20px;
  }
  .editor {
    width: 100%;
    display: inline-block;
  }
  .button{
    display: flex;
    justify-content: flex-end;
  }
  .save-button {
    margin: 12px;
  }
</style>
