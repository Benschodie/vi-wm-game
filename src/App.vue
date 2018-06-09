<template>
  <div id="app">
    <!-- Einbinden des Templates in App -->
    <Navbar />

    <router-view/>
  </div>
</template>

<script>
// importieren der componente aus components ordner
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    // "normal"
    // Navbar: Navbar
    // wenn key und value innerhalb des objekts gleich sind dann es 6 variante
    Navbar
  }
}
</script>

<style>

</style>
