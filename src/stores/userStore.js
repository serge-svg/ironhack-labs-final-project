import { defineStore } from 'pinia'
import supabase from '@/supabase';

export default defineStore('userStore', {
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
