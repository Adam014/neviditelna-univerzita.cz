<script setup>
import AuthComponent from './AuthComponent.vue'
import EventsComponent from './EventsComponent.vue'
import StateFlagsComponent from './StateFlagsComponent.vue'
import OwnerComponent from './SideComponents/OwnerComponent.vue';
import NSSETComponent from './SideComponents/NSSETComponent.vue';
import KeySetComponent from './SideComponents/KeySetComponent.vue';
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
        <KeySetComponent />
      </div>
    </div>
  </main>
</template>
