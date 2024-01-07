<script setup>
import IconProfile from './icons/IconProfile.vue'
import IconHamburger from './icons/IconHamburger.vue'
import IconLogout from './icons/IconLogout.vue'
import IconUser from './icons/IconUser.vue'
</script>

<template>
  <header>
    <nav>
      <div class="nav-navigation">
        <IconHamburger />
        <h3>Ferda</h3>
      </div>
      <div class="nav-profile">
        <div class="profile-info" @click="toggleUserMenu">
          <IconProfile />
          <h3>Jan Musílek</h3>
        </div>
        <div v-show="userMenuVisible" class="user-menu">
          <div class="user-container">
            <IconUser />
            <div>
              <h3>Jan Musílek</h3>
              <h5>ADMIN</h5>
            </div>
          </div>
          <div class="logout-container">
            <IconLogout />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref } from 'vue'

const userMenuVisible = ref(false)

const toggleUserMenu = () => {
  userMenuVisible.value = !userMenuVisible.value
}
</script>
