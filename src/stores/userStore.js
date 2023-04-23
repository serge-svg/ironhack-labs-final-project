import { defineStore } from 'pinia'
import supabase from '@/supabase';
/*
export default defineStore('user', {
    state: () => {
        return {
            user: null,
        }
    },
    actions: {
        async fetchUser() {
            const { data: { user } } = await supabase.auth.getUser()
            this.user = user
        }
    }    
});
*/

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    session: null,
    error: null
  }),
  actions: {
    async signIn(email, password) {
      try {
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
      try {
        const { error } = await supabase.auth.signOut()

        if (error) {
          throw error
        }

        this.user = null
        this.session = null
      } catch (error) {
        this.error = error.message
      }
    }
  }
});

