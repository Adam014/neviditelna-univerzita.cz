<script setup>
import IconEyeTrue from '../icons/IconEyeTrue.vue'
import IconEyeClosed from '../icons/IconEyeClosed.vue'
</script>

<template>
  <section class="owner-container">
    <div class="headline-container">
      <h2>Owner:</h2>
    </div>
    <div class="owner-information">
      <h2 data-text="Handle:">
        <span v-if="shouldShowBrElement">
            <br>
        </span>
        <span class="blue-text">{{ ownerData.handle }}</span>
      </h2>
      <div class="organization-title">
        <span v-if="ownerData.publish.organization" class="icon">
          <IconEyeTrue />
        </span>
        <span v-else class="icon">
          <IconEyeClosed />
        </span>
        <h2 data-text="Organization:">
          <span v-if="shouldShowBrElement">
              <br>
          </span>
          <span>{{ ownerData.organization }}</span>
        </h2>
      </div>
      <div class="name-title">
        <span v-if="ownerData.publish.name" class="icon">
          <IconEyeTrue />
        </span>
        <span v-else class="icon">
          <IconEyeClosed />
        </span>
        <h2 data-text="Name:">
          <span v-if="shouldShowBrElement">
              <br>
          </span>
          <span>{{ ownerData.name }}</span>
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import { getOwnerInfo } from '@/utils/utils';
import BrMixin from "@/utils/BrMixin";

export default {
  data() {
    return {
      ownerData: getOwnerInfo()
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
