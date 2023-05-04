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

        if (error) {
          console.error(error);
        } else {
          this.tasksList = data;
        }
        return this.tasksList;
      },
      async add(task) {
        try {
          const { data, error } = await supabase
          .from('tasks')
          .insert([task])
          .select()
          debugger
          if (error) { throw error; }
          console.log(data);
          this.tasksList.push(data[0]);          

        } catch (error) {
          console.error(error);
        }
      },
    }
});
