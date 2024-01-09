<script setup>
import IconEyeTrue from './icons/IconEyeTrue.vue'
import IconEyeClosed from './icons/IconEyeClosed.vue'
</script>

<template>
  <section class="state-flags-container">
    <div class="headline-container">
      <h2>State flags:</h2>
    </div>

    <section v-if="!verboseView" class="state-flags-information" >
      <div v-for="(flag, index) in activeFlags" :key="index">
        <div class="flag">
          <span :class="['icon', flag.active ? 'eye-true' : 'eye-closed']">
            <component :is="flag.active ? IconEyeTrue : IconEyeClosed" />
          </span>
          <div :class="['flag-descripton', flag.active ? 'green' : 'red']"><h5>{{ flag.description }}</h5></div>
        </div>
      </div>
    </section>
    <section v-else :class="['state-flags-information', verboseView ? 'grid-layout' : '']">
      <div class="flag" v-for="(flag, index) in flagInfo" :key="index">
        <span :class="['', flag.active ? 'eye-true' : 'eye-closed']">
          <component :is="flag.active ? IconEyeTrue : IconEyeClosed" class="icon"/>
        </span>
        <h5 :class="['flag-descripton', flag.active ? 'green' : 'red']">{{ flag.description }}</h5>
      </div>
    </section>
  </section>
</template>

<script>
import { getFlagInfo } from '@/utils/utils'

export default {
  props: {
    verboseView: Boolean
  },
  data() {
    return {
      flagInfo: getFlagInfo()
    }
  },
  computed: {
    activeFlags() {
      return this.flagInfo.filter(flag => flag.active === true);
    }
  }
}
</script>
