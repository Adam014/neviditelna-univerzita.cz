<script setup>
import AuthComponent from './AuthComponent.vue';


</script>

<template>
    <main>
        <h2><bold>neviditelna-univerzita.cz</bold></h2>
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
    </main>
</template>