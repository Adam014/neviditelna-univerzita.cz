<script setup>
import Navbar from './components/NavbarComponent.vue'
import Sidebar from './components/SideBarComponent.vue'
import Main from './components/MainComponent.vue'
import { SpeedInsights } from '@vercel/speed-insights/next'
</script>

<template>
  <div class="container">
    <Navbar />
    <Sidebar />
    <Main />
    <SpeedInsights />
  </div>
</template>
