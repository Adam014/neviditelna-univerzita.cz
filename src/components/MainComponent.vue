<script setup>
import AuthComponent from './AuthComponent.vue'
import EventsComponent from './EventsComponent.vue'
import StateFlagsComponent from './StateFlagsComponent.vue'
import OwnerComponent from './OwnerComponent.vue';
import NSSETComponent from './NSSETComponent.vue';
</script>

<template>
  <main>
    <div class="main-title">
      <h2>neviditelna-univerzita.cz</h2>
    </div>
    <div class="verbose-view-container">
      <div class="cl-toggle-switch">
        <label class="cl-switch">
          <input type="checkbox" />
          <span></span>
        </label>
      </div>
      <h4>Verbose view</h4>
    </div>
    <div class="component-container">
      <div class="main-components-container">
        <AuthComponent />
        <EventsComponent />
        <StateFlagsComponent />
      </div>
      <div class="side-containers">
        <OwnerComponent />
        <NSSETComponent />
      </div>
    </div>
  </main>
</template>
