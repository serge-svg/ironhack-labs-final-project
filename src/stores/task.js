import { defineStore } from 'pinia'
import supabase from '../supabase/index'

export default defineStore({
  id: 'tasks',
  state: () => ({
    tasksList: []
  }),
  actions: {
    async fetchTasks() {
      const { data, error } = await supabase.from('tasks').select('*');

      if (error) {
        console.log(`error: ${error}`);
        throw error;
      }

      this.tasksList = data;
      this.tasksList.sort((a, b) => {
        return a.inserted_at < b.inserted_at;
      });
    },
    async add(task) {
      console.log(`task: ${task}`);
      const { data, error } = await supabase.from('tasks').insert([task]).select();

      if (error) {
        console.log(`error: ${error}`);
        throw error;
      }
      this.tasksList.unshift(data[0]);
    },
    async delete(id, taskIndex) {
      const { error } = await supabase.from('tasks').delete().eq('id', id);

      if (error) {
        console.log(`error: ${error}`);
        throw error;
      }

      this.tasksList.splice(taskIndex, 1)
    },
    async updateDescription(id, newTitle) {
      const { error } = await supabase.from('tasks').update({ title: newTitle }).eq('id', id);

      if (error) {
        console.log(`error: ${error}`);
        throw error;
      }

      const index = this.tasksList.findIndex((task) => task.id === id);
      this.tasksList[index].title = newTitle;
    },
    async updateStatus(id, completed, updated_at) {
      console.log(`id: ${id}, completed: ${completed}, updated_at: ${updated_at}`);
      const { error } = await supabase
        .from('tasks')
        .update({ is_complete: completed, completed_at: updated_at })
        .eq('id', id);

      if (error) {
        console.log(`error: ${error}`);
        throw error;
      }
      
      const index = this.tasksList.findIndex((task) => task.id === id)
      this.tasksList[index].is_complete = completed;
      this.tasksList[index].completed_at = updated_at;
      
    }
  }
})
