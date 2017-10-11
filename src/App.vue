<template>
  <div id="app">
    <div class="list">
      <list></list>
    </div>
    <div class="editor">
      <editor></editor>
    </div>
  </div>
</template>

<script>
import List from '@/components/list'
import Editor from '@/components/editor'

export default {
  name: 'app',
  components: {
    List,
    Editor
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    width: 100vw;
    height: 100vh;
  }
  #app > div {
    height: 100vh;
    padding: 10px;
    box-sizing: border-box;
  }
  #app .list {
    float: left;
    overflow: scroll;
    width: 300px;
    border-right: 1px solid #e3d3e3;
  }

  #app .editor {
    padding-left: 10px;
    overflow-wrap: break-word;
  }
</style>
