import { defineNuxtPlugin } from '#app'
import User from '@/api/users'

export default defineNuxtPlugin(() => {
  const api = {
    user: User()
  }

  return {
    provide: {
      api
    }
  }
})
