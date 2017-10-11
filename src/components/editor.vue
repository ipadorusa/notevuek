<template>
  <div class="note">
    <div class="toolbar">
      <button @click="saveNote">저장하기</button>
      <button @click="removeNote">삭제하기</button>
    </div>
    <input v-model="title" class="title" type="text" placeholder="제목을 입력하세요">
    <div ref="body" class="body" contenteditable></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Editor',
  computed: mapState(['currentNote']),
  data () {
    return {
      key: '',
      title: ''
    }
  },
  methods: {
    saveNote () {
      let updateNote = {
        '.key': this.currentNote['.key'],
        title: this.title,
        body: this.$refs.body.innerHTML,
        updated_at: new Date()
      }

      this.$store.commit('updateNote', updateNote)
      this.$store.dispatch('commitCurrentNote')
    },
    removeNote () {
      this.$store.dispatch('removeCurrentNote')
    }
  }
}
</script>
<style scoped>
  .note {
    display: flex;
    flex-flow: column;
    height: 100vh;
  }

  .note .toolbar {
    margin-bottom: 35px;
  }

  .note .toolbar button {
    border: 0;
    background-color:#ddd;
    padding: 6px 10px;
    border-radius: 5px;
  }

  .note .title {
    width: 100%;
    box-sizing: border-box;
    border: 0;
    border-bottom: 1px solid #e3e3e3;
    font-size: 30px;
    outline: 0;
    padding: 15px;
    margin-bottom: 10px;
  }

  .note .body {
    outline: 0;
    padding: 15px;
    height: 100%;
    overflow: auto;
  }
</style>

