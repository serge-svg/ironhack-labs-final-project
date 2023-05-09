import { defineStore } from 'pinia'
import supabase from '../supabase/index'

export default defineStore({
  id: 'tasks',
  state: () => ({
    tasksList: []
  }),
  actions: {
    async fetchTasks() {
      const { data, error } = await supabase.from('tasks').select('*')

      if (error) { throw error }

      this.tasksList = data;     

    },
    async add(task) {
      console.log('aaA')
      const { data, error } = await supabase.from('tasks').insert([task]).select()

      if (error) { throw error }
      this.tasksList.push(data[0]);
    },
    async delete(id, taskIndex) {
      const { error } = await supabase.from('tasks').delete().eq('id', id)

      if (error) { throw error }

      this.tasksList.splice(taskIndex, 1);
    },
    async update(id, newTitle) {
      const { error } = await supabase.from('tasks').update({ title: newTitle }).eq('id', id)

      if (error) { throw error }
    }
  }
})
