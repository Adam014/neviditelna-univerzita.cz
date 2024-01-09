<template>
  <section class="nsset-container">
    <div class="headline-container">
      <h2>NSSet:</h2>
    </div>
    <div class="nsset-information">
      <h2 data-text="Handle:">
        <span v-if="shouldShowBrElement">
            <br>
        </span>
        <span class="blue-text">{{ nssetData.handle }}</span>
      </h2>
      <h2 data-text="Registrar:">
        <span v-if="shouldShowBrElement">
            <br>
        </span>
        <span class="blue-text">
          {{ nssetData.registrar }}
        </span>
      </h2>
      <h2 data-text="DNS:" class="dns">
          <span v-if="shouldShowBrElement">
              <br>
          </span>
        <span v-for="(dns, index) in nssetData.dns" :key="index">
          {{ dns.name }}
        </span>
      </h2>
    </div>
  </section>
</template>

<script>
import { getNSSETInfo } from '@/utils/utils';
import BrMixin from "@/utils/BrMixin";

export default {
  data() {
    return {
      nssetData: getNSSETInfo()
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
