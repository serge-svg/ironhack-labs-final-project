<template>
  <div class="flex flex-col items-center">
    <h1 class="text-5xl font-bold text-center my-3">Login</h1>
    <div class="card-body shadow-2xl bg-base-100 w-1/2">
      <form @submit.prevent="validateForm">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input id="fEmail" v-model="email" placeholder="email" class="input input-bordered" />
          <p id="email_v" style="visibility: hidden; color: red">Email invalid!</p>
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
            <a href="/sign-up" class="label-text-alt link link-hover">Create an account?</a>
          </label>
          <p id="password_v" style="visibility: hidden; color: red">Password invalid!</p>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>

  <RouterLink to="/sign-up" />
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import useAuthStore from '@/stores/user'
import router from '../router'

const authStore = useAuthStore()
const email = ref('')
const password = ref('')

const handleSignIn = async () => {
  try {
    await authStore.signIn(email.value, password.value)
    router.push('/tasks-list')
  } catch (error) {
    console.log('Error on sign in process:', error)
    document.getElementById('password_v').style.visibility = 'visible'
    document.getElementById('password_v').style.color = 'red'
    document.getElementById('password_v').innerHTML = error.message
    _resetForm()
  }
}

function validateForm() {
  _isValidEmail()
  _isValidPassword()
}

function _isValidEmail() {
  const isValidEmail = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm.test(email.value)
  if (!isValidEmail) {
    document.getElementById('email_v').innerHTML = 'Email invalid!'
    document.getElementById('email_v').style.color = 'red'
    document.getElementById('email_v').style.visibility = 'visible'
  } else {
    document.getElementById('email_v').style.visibility = 'hidden'
  }
}

function _isValidPassword() {
  let error = ''
  if (!password) {
    error = 'Password can not be empty!'
  } else if (password.value.length < 6) {
    error = 'Password must be 6 characters or longer!'
  } else if (password.value.length > 20) {
    error = 'Password must be 20 characters or shorter!'
  } else if (password.value.search(/\d/) == -1) {
    error = 'Password must contain at least one digit!'
  } else if (password.value.search(/[a-zA-Z]/) == -1) {
    error = 'Password must contain at least one letter!'
  }

  if (!error) {
    handleSignIn()
  } else {
    document.getElementById('password_v').style.visibility = 'visible'
    document.getElementById('password_v').style.color = 'red'
    document.getElementById('password_v').innerHTML = error
  }
}

function _resetForm() {
  email.value = ''
  password.value = ''
  document.getElementById('email_v').style.visibility = 'hidden'
}
</script>
