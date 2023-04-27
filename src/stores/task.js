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
          .select()

        if (error) {
          console.error(error);
        } else {
          this.tasksList = data;
          console.log(data);
        }
      }
    }
});
