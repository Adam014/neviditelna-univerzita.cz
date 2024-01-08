<script setup>
import AuthComponent from './AuthComponent.vue'
import EventsComponent from './EventsComponent.vue'
import StateFlagsComponent from './StateFlagsComponent.vue'
import SideComponents from './SideComponents/index';

// Destructure the exported names
const { KeySetComponent, AdminContacts, NSSETComponent, OwnerComponent } = SideComponents;

import { ref } from 'vue'
const verboseView = ref(false)

</script>

<template>
  <main>
    <div class="main-title">
      <h2>neviditelna-univerzita.cz</h2>
    </div>
    <div class="verbose-view-container">
      <div class="cl-toggle-switch">
        <label class="cl-switch">
          <input type="checkbox" id="checkbox" v-model="verboseView" />
          <span></span>
        </label>
      </div>
      <h4>Verbose view: {{ verboseView }}</h4>
    </div>
    <div class="component-container">
      <div class="main-components-container">
        <AuthComponent />
        <EventsComponent />
        <StateFlagsComponent />
      </div>
      <div class="side-containers">
        <OwnerComponent />
        <AdminContacts :verboseView="verboseView"/>
        <NSSETComponent />
        <KeySetComponent />
      </div>
    </div>
  </main>
</template>