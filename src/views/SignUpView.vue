<template>
   <div class="container mx-auto max-w-960">
    <div class="flex-col lg:flex-row-reverse">
      <h1 class="text-5xl font-bold text-center my-3">Register</h1>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form @submit.prevent="validateForm">
          <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              v-model="email"
              type="email"
              required
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              v-model="password"
              type="password"
              placeholder="password"
              class="input input-bordered"
            />
            <label class="label">
              <span class="label-text">Repite Password</span>
            </label>
            <input
              v-model="password2"
              type="password"
              placeholder="password"
              class="input input-bordered"
            />
          </div>
          <p id="identical" style="visibility: hidden; color: red;">Passwords must be indentical!</p>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Sign up</button>
          </div>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useAuthStore from '@/stores/user'

const authStore = useAuthStore()
const email = ref('')
const password = ref('')
const password2 = ref('')

const handleSignUp = async () => {
  try {
    await authStore.signUp(email.value, password.value)
    document.getElementById("identical").style.color = "green";
    document.getElementById("identical").innerHTML = 'Success, Verify your email!';
    document.getElementById("identical").style.visibility = "visible";
  } catch (error) {
    console.log(error)
  }
}

function validateForm(){

  debugger
  let error = '';
  document.getElementById("identical").style.color = "red";
  document.getElementById("identical").innerHTML = error;
  document.getElementById("identical").style.visibility = "hidden";
  if (password.value !== password2.value) {
    error = 'Passwords must be identical!'
  } else if(password.value.length < 6) {
    error = 'Password must be 6 characters or longer!'
  } else if(password.value.length > 20) {
    error = 'Password must be 20 characters or shorter!'
  } else if(password.value.search(/\d/) == -1) {
    error = 'Password must contain at least one digit!'
  } else if(password.value.search(/[a-zA-Z]/) == -1) {
    error = 'Password must contain at least one letter!'
  }

  if (!error) {
    handleSignUp();
  } else {
    document.getElementById("identical").innerHTML = error;
    document.getElementById("identical").style.visibility = "visible";
  }
}
</script>
