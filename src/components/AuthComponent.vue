<template>
  <section class="auth-container">
    <h2>
      AuthInfo:
      <span v-show="showPassword" class="secret-password">secretpassword</span>
      <button @click="togglePasswordVisibility">{{ showPassword ? 'HIDE' : 'SHOW' }}</button>
    </h2>
    <h2 class="expires-h2">
      Expires At: <span>{{ formattedExpiresAt }}</span>
    </h2>
  </section>
</template>

<script>
import { getAuthInfo } from '../utils/utils'
import { formatDate } from '../utils/utils'

export default {
  data() {
    return {
      domainData: getAuthInfo(),
      showPassword: false
    }
  },
  computed: {
    formattedExpiresAt() {
      return formatDate(this.domainData.expires_at)
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    }
  }
}
</script>
