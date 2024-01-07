

<template>
    <section class="auth-container">
        <h2>
            AuthInfo: 
            <span v-show="showPassword" class="secret-password">secretpassword</span>
            <button @click="togglePasswordVisibility">{{ showPassword ? 'HIDE' : 'SHOW' }}</button>
        </h2>    
        <h2 class="expires-h2">Expires At: <span>{{ formattedExpiresAt }}</span></h2>
    </section>
</template>

<script>

import domainData from '../utils/domain-detail.json';

export default {
  data() {
    return {
      domainData: domainData,
      showPassword: false, // Initially, the password is hidden
    };
  },
  computed: {
    formattedExpiresAt() {
      const expiresAt = this.domainData.expires_at;

      // Parsing date
      const expirationDate = new Date(expiresAt);

      // Setting the options for formatting
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'UTC', // timezone to UTC
      };

      const formatter = new Intl.DateTimeFormat('en-US', options);
      return formatter.format(expirationDate);
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>