<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <main class="main">
        <div class="container">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
  import AppHeader from '../components/Header'
  import AppFooter from '../components/Footer'

  export default {
    name: 'full',
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

<style>


</style>
