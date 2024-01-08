<script setup>
    import IconEyeTrue from '../icons/IconEyeTrue.vue';
    import IconEyeClosed from '../icons/IconEyeClosed.vue';
</script>

<template>
    <section class="admin-container">
        <div class="headline-container">
        <h2>Administrative contact{{ verboseView === true ? "" : "s" }}:</h2>
        </div>
        <div class="admins-information" v-if="!verboseView">
            <h2 v-for="admin in adminInfo" :key="admin.handle" :data-text="`${admin.name}:`" class="non-verbose">
                <span class="blue-text">{{ admin.handle }}</span>
            </h2>
        </div>
        <div class="admins-information" v-if="verboseView">
            <div class="handle-title">
                <h2 data-text="Handle:"><span class="blue-text">{{ adminInfo[0].handle }}</span></h2>
            </div>
            <div class="organization-title">
                <span v-if="adminInfo[0].publish.organization" class="icon">
                    <IconEyeTrue />
                </span>
                <span v-else class="icon">
                    <IconEyeClosed />
                </span>
                <h2 data-text="Organization:"><span>{{ adminInfo[0].organization }}</span></h2>
            </div>
            <div class="name-title">
                <span v-if="adminInfo[0].publish.organization" class="icon">
                    <IconEyeTrue />
                </span>
                <span v-else class="icon">
                    <IconEyeClosed />
                </span>
                <h2 data-text="Name:"><span>{{ adminInfo[0].name }}</span></h2>
            </div>
        </div>
    </section>
    <section class="admin-container" v-if="verboseView">
        <div class="headline-container">
            <h2>Administrative contact:</h2>
        </div>
        <div class="admins-information">
            <div class="handle-title">
                <h2 data-text="Handle:"><span class="blue-text">{{ adminInfo[1].handle }}</span></h2>
            </div>
            <div class="organization-title">
                <span v-if="adminInfo[1].publish.organization" class="icon">
                    <IconEyeTrue />
                </span>
                <span v-else class="icon">
                    <IconEyeClosed />
                </span>
                <h2 data-text="Organization:"><span>{{ adminInfo[1].organization }}</span></h2>
            </div>
            <div class="name-title">
                <span v-if="adminInfo[1].publish.organization" class="icon">
                    <IconEyeTrue />
                </span>
                <span v-else class="icon">
                    <IconEyeClosed />
                </span>
                <h2 data-text="Name:"><span>{{ adminInfo[1].name }}</span></h2>
            </div>
        </div>
    </section>
</template>

<script>
import { getAdminsInfo } from '@/utils/utils';

export default {
  props: {
    verboseView: Boolean, // Receive verboseView as a prop
  },
  data() {
    return {
      adminInfo: getAdminsInfo(),
    };
  },
};
</script>
