<template>
  <div id="app">
    <!-- My injected custom navigation bar -->
    <TheNavigationBar />
    <!-- All the router views get injected here -->
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
// import { TweenMax } from 'gsap';
import TheNavigationBar from '@/components/TheNavigationBar.vue';

export default {
  components: {
    TheNavigationBar,
  },
};
</script>

<style lang="scss">

// Import scss file that has Bulma reference and custom CSS
@import "./assets/scss/main.scss";
</style>
