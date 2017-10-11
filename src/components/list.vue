<template>
  <div>
    <div class="toolbar">
      <button @click="newNote">새 메모</button>
    </div>
    <div class="notes">
      <note v-for="note in notes" :key="note['.key']" :note="note" :class="{ active: currentNote['.key'] == note['.key'] }"></note>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import Note from '@/components/note'
export default {
  name: 'List',
  computed: {
    ...mapGetters(['notes']),
    ...mapState(['currentNote'])
  },
  methods: {
    newNote () {
      this.$store.commit('updateNote', {})
    }
  },
  created () {
    this.$store.dispatch('setNotesReference')
    // this.$store.watch((state) => state.currentNote, (newVal, oldVal) => {
    //   this.$router.push({ params: { key: newVal['.key'] } })
    // })
  },
  components: {
    Note
  }
}
</script>
<style scoped>
  .toolbar {
    text-align: right;
    margin-bottom: 30px;
  }

  .toolbar button {
    background-color: #ddd;
    padding: 6px 10px;
    border: 0;
    border-radius: 5px;
  }
</style>
