<template>
    <section class="nsset-container">
        <div class="headline-container">
            <h2>NSSet: </h2>
        </div>
        <div class="nsset-information">
            <h2 data-text="Handle:"><span class="blue-text">{{ nssetData.handle }}</span></h2>
            <h2 data-text="Registrar:"><span class="blue-text">{{ nssetData.registrar }}</span></h2>
            <h2 data-text="DNS:">
                <span v-for="(dns, index) in nssetData.dns" :key="index">
                    {{ dns.name }}
                </span>
            </h2>
        </div>
    </section>
</template>

<script>
import { getNSSETInfo } from '@/utils/utils';

export default {
    data() {
        return {
            nssetData: getNSSETInfo(),
        }
    }
}

</script>