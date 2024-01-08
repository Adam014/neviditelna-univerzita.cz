<template>
  <section class="keyset-container">
    <div class="headline-container">
      <h2>KeySet:</h2>
    </div>
    <div class="keyset-information">
      <h2 data-text="Handle:">
        <span class="blue-text">{{ keysetData.handle }}</span>
      </h2>
      <h2 data-text="Registrar:">
        <span class="blue-text">{{ keysetData.registrar }}</span>
      </h2>
      <h2 data-text="DNS keys:">
        <span v-for="(dnskey, index) in keysetData.dns_keys" :key="index" class="dns-keys">
          {{ dnskey }}
        </span>
      </h2>
    </div>
  </section>
</template>

<script>
import { getKeySetInfo } from '@/utils/utils'

export default {
  data() {
    return {
      keysetData: getKeySetInfo()
    }
  }
}
</script>
