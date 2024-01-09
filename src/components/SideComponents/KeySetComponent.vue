<template>
  <section class="keyset-container">
    <div class="headline-container">
      <h2>KeySet:</h2>
    </div>
    <div class="keyset-information">
      <h2 data-text="Handle:">
        <span v-if="shouldShowBrElement">
            <br>
        </span>
        <span class="blue-text">{{ keysetData.handle }}</span>
      </h2>
      <h2 data-text="Registrar:">
        <span v-if="shouldShowBrElement">
            <br>
        </span>
        <span class="blue-text">{{ keysetData.registrar }}</span>
      </h2>
      <h2 data-text="DNS keys:" class="dnskeys-title">
        <div class="keys">
          <span v-if="shouldShowBrElement">
              <br>
          </span>
          <span v-for="(dnskey, index) in keysetData.dns_keys" :key="index" class="dns-keys">
            {{ dnskey }}
          </span>
        </div>
      </h2>
    </div>
  </section>
</template>

<script>
import { getKeySetInfo } from '@/utils/utils';
import BrMixin from "@/utils/BrMixin";

export default {
  data() {
    return {
      keysetData: getKeySetInfo()
    }
  },
  computed: {
    shouldShowBrElement() {
      return this.windowWidth < 500;
    }
  },
  mixins: [BrMixin],
}
</script>
