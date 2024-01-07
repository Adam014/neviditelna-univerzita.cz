<script setup>
import AuthComponent from './AuthComponent.vue';
import EventsComponent from './EventsComponent.vue';


</script>

<template>
    <main>
        <h2>neviditelna-univerzita.cz</h2>
        <div class="verbose-view-container">
            <div class="cl-toggle-switch">
                <label class="cl-switch">
                    <input type="checkbox">
                    <span></span>
                </label>
            </div>
            <h4>Verbose view</h4>
        </div>
        <AuthComponent />
        <EventsComponent />
    </main>
</template>