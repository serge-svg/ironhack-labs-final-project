<template>
  <div class="flex flex-col items-center">
    <h1 class="text-5xl font-bold text-center my-3">Register</h1>
    <div class="card-body shadow-2xl bg-base-100 w-1/2">
      <form @submit.prevent="validateForm">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input id="fEmail" v-model="email" placeholder="email" class="input input-bordered" />
          <p id="email_v" style="visibility: hidden; color: red">Email format invalid!</p>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            v-model="password1"
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
        <p id="password_v" style="visibility: hidden; color: red">Passwords must be indentical!</p>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Sign up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useAuthStore from '@/stores/user'

const authStore = useAuthStore()

const email = ref('')
const password1 = ref('')
const password2 = ref('')

const fEmail = document.getElementById('fEmail')
const email_v = document.getElementById('email_v')

const fPassword1 = document.getElementById('fPassword1')
const fPassword2 = document.getElementById('fPassword2')
const password_v = document.getElementById('password_v')

const handleSignUp = async () => {
  try {
    await authStore.signUp(email.value, password1.value)

    document.getElementById('email_v').innerHTML = 'Success, verify your email!'
    document.getElementById('email_v').style.color = 'green'
    document.getElementById('email_v').style.visibility = 'visible'
    console.log('Success, Verify your email!')
  } catch (error) {
    console.log(error)
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
    document.getElementById('email_v').innerHTML = 'Email format invalid!'
    document.getElementById('email_v').style.color = 'red'
    document.getElementById('email_v').style.visibility = 'visible'
  }
}

function _isValidPassword() {
  let error = ''
  if (password1.value !== password2.value) {
    error = 'Passwords must be identical!'
  } else if (password1.value.length < 6) {
    error = 'Password must be 6 characters or longer!'
  } else if (password1.value.length > 20) {
    error = 'Password must be 20 characters or shorter!'
  } else if (password1.value.search(/\d/) == -1) {
    error = 'Password must contain at least one digit!'
  } else if (password1.value.search(/[a-zA-Z]/) == -1) {
    error = 'Password must contain at least one letter!'
  }

  if (!error) {
    handleSignUp()
  } else {
    document.getElementById('password_v').style.visibility = 'visible'
    document.getElementById('password_v').style.color = 'red'
    document.getElementById('password_v').innerHTML = error
  }
}

function _resetForm() {
  email.value = ''
  password1.value = ''
  password2.value = ''
  document.getElementById('password_v').innerHTML = ''
  document.getElementById('password_v').style.color = 'green'
  document.getElementById('password_v').style.visibility = 'hidden'
}
</script>
