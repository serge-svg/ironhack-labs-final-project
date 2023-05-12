import { defineStore } from 'pinia'
import supabase from '@/supabase'

export default defineStore('user', {
  state: () => ({
    currentUser: null
  }),
  actions: {
    async fetchUser() {
      const { data: { user } } = await supabase.auth.getUser();

      this.currentUser = user;
    },
    async signIn(email, password) {
        const { data: { user }, error } = await supabase.auth.signInWithPassword({
          email,
          password
        })

        if (error) { 
          console.log(`error: ${error}`);
          throw error;
        }

        if (user) this.currentUser = user
    },
    async signUp(email, password) {
        const { data: { user }, error } = await supabase.auth.signUp({
          email,
          password
        })

        if (error) { 
          console.log(`error: ${error}`);
          throw error;
        }

        if (user) this.currentUser = user;
    },
    async signOut() {
      const { error } = await supabase.auth.signOut()

      if (error) { 
        console.log(`error: ${error}`);
        throw error;
      }

      this.currentUser = null
    }
  }
})
