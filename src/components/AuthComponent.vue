<template>
  <section class="auth-container">
    <h2>
      AuthInfo:
      <span v-show="showPassword" class="secret-password">rKN!H?{?60|3no>.8Fs</span>
      <button @click="togglePasswordVisibility">{{ showPassword ? 'HIDE' : 'SHOW' }}</button>
    </h2>
    <h2 class="expires-h2">
      Expires At: 
      <span v-if="shouldShowBrElement">
        <br>
      </span>
      <span>{{ formattedExpiresAt }}</span>
    </h2>
  </section>
</template>

<script>
import { getAuthInfo, formatDate } from '@/utils/utils';
import BrMixin from "@/utils/BrMixin";

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
    },
    shouldShowBrElement() {
      return this.windowWidth < 500;
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    }
  },
  mixins: [BrMixin],
}
</script>
