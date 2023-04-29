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
      try {
        const { data: { user }, error } = await supabase.auth.signInWithPassword({
          email,
          password
        })
        
        if (error) { throw error }
        if (user) this.currentUser = user;
        
      } catch (error) {
        this.currentUser = null
        this.error = error.message
      }
    },
    async signUp(email, password) {
      try {
        const { data: { user } , error } = await supabase.auth.signUp({
          email,
          password
        })

        if (error) { throw error }
        if (user) this.currentUser = user;

      } catch (error) {
        this.currentUser = null;
        this.error = error.message;
      }
    },
    async signOut() {
      console.log('signOut')
      const { error } = await supabase.auth.signOut()
      if (error) { throw error }
      this.currentUser = null
    }
  }
})
