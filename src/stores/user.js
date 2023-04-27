import { defineStore } from 'pinia'
import supabase from '@/supabase'

export default defineStore('user', {
  state: () => ({
    currentUser: null
  }),
  actions: {
    async fetchUser() {
      console.log('fetchUser');
      debugger
      const { data: { user } } = await supabase.auth.getUser();
      console.log(`user: ${user}`)
      this.currentUser = user;
    },
    async signIn(email, password) {
      try {
        console.log('auth->signIn')
        const { user, session, error } = await supabase.auth.signIn({
          email,
          password
        })
        if (error) {
          throw error
        }

        this.user = user
        this.session = session
        this.error = null
      } catch (error) {
        this.user = null
        this.session = null
        this.error = error.message
      }
    },
    async signUp(email, password) {
      try {
        console.log('auth->signUp')
        const { user, session, error } = await supabase.auth.signUp({
          email,
          password
        })
        if (error) {
          throw error
        }

        this.user = user
        this.session = session
        this.error = null
      } catch (error) {
        this.user = null
        this.session = null
        this.error = error.message
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
