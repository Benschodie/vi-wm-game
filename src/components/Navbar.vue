<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
        <router-link :to="{ name: 'Index' }">
          <span class="nav-title">WM 2018</span>
        </router-link>
        <router-link :to="{ name: 'Vitable' }">
          <span>VI Tabelle</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {

    }
  }
}
</script>

<style>
  .navbar nav {
    padding-left: 20px;
  }
</style>


