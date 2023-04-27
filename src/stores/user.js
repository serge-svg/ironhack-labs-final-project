import { defineStore } from 'pinia'
import supabase from '@/supabase'

export default defineStore('user', {
  state: () => ({
    currentUser: null
  }),
  actions: {
    async fetchUser() {
      console.log('fetchUser');
      const { data: { user } } = await supabase.auth.getUser();
      console.log(`user: ${user}`)
      this.currentUser = user;
    },
    async signIn(email, password) {
      try {
        const { data: { user }, error } = await supabase.auth.signInWithPassword({
          email,
          password
        })
        if (error) { 
          throw error 
        } else {
          if (user) this.user = user
        }
      } catch (error) {
        this.user = null
        this.error = error.message
      }
    },
    async signUp(email, password) {
      try {
        const { data: { user} , error } = await supabase.auth.signUp({
          email,
          password
        })

        if (error) { 
          throw error 
        } else {
          if (user) this.user = user
        }

      } catch (error) {
        this.user = null;
        this.error = error.message;
      }
    },
    async signOut() {
      const { error } = await supabase.auth.signOut()
      if (error) {
        throw error
      }
      this.user = null
      this.session = null
    }
  }
})
