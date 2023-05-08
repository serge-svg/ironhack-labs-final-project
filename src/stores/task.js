import { defineStore } from 'pinia'
import supabase from '../supabase/index'

export default defineStore({
    id: 'tasks',
    state: () => ({
      tasksList: []
    }),
    actions: {
      async fetchTasks() {
        const { data, error } = await supabase
          .from('tasks')
          .select('*')

        if (error) { throw error; }
        
        this.tasksList = data;
  
        return this.tasksList;
      },
      async add(task) {
        const { data, error } = await supabase
          .from('tasks')
          .insert([task])
          .select()
          
          if (error) { throw error; }

          this.tasksList.push(data[0]);          
      },
      async delete(id, taskIndex) {
        const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', id)

        if (error) { throw error; }
        
        this.tasksList.splice(taskIndex, 1);
      },
      async update(message) {
        const { error } = await supabase
        .from('tasks')
        .update({ title: message })
        .eq('id', task.id)

        if (error) { throw error; }
        
        console.log(task.id);
        
      }
    }
});
