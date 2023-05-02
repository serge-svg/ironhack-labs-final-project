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
          console.log(`add task: ${task}`);
          console.log(`title: ${task.title}`);
          console.log(`user_id: ${task.user_id}`);
          // Guarda la tarea en Supabase
          const { data, error } = await supabase.from('tasks').insert([task]);
          if (error) {
            throw error;
          }
          // Agrega la tarea a la lista de tareas en el estado
          this.tasks.push(data[0]);
        } catch (error) {
          console.error(error);
        }
      },
    }
});
