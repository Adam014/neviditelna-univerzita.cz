<script setup>
import IconEyeTrue from '../icons/IconEyeTrue.vue'
import IconEyeClosed from '../icons/IconEyeClosed.vue'
</script>

<template>
  <section>
    <section v-if="!verboseView" class="admin-container">
      <div class="headline-container">
        <h2>Administrative contact{{ adminInfo.length > 1 ? 's' : '' }}:</h2>
      </div>
      <div class="admins-information">
        <h2
          v-for="admin in adminInfo"
          :key="admin.handle"
          :data-text="`${admin.name}:`"
          class="non-verbose"
        >
          <span class="blue-text">{{ admin.handle }}</span>
        </h2>
      </div>
    </section>

    <section v-else class="admin-container">
      <section v-for="(admin, index) in adminInfo" :key="index">
        <div class="headline-container">
          <h2>Administrative contact:</h2>
        </div>
        <div class="admins-information">
          <div class="handle-title">
            <h2 data-text="Handle:">
              <span class="blue-text">{{ admin.handle }}</span>
            </h2>
          </div>
          <div class="organization-title">
            <span :class="['icon', admin.publish.organization ? 'eye-true' : 'eye-closed']">
              <component :is="admin.publish.organization ? IconEyeTrue : IconEyeClosed" />
            </span>
            <h2 data-text="Organization:">
              <span>{{ admin.organization }}</span>
            </h2>
          </div>
          <div class="name-title">
            <span :class="['icon', admin.publish.organization ? 'eye-true' : 'eye-closed']">
              <component :is="admin.publish.organization ? IconEyeTrue : IconEyeClosed" />
            </span>
            <h2 data-text="Name:">
              <span>{{ admin.name }}</span>
            </h2>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import { getAdminsInfo } from '@/utils/utils'

export default {
  props: {
    verboseView: Boolean
  },
  data() {
    return {
      adminInfo: getAdminsInfo()
    }
  }
}
</script>
