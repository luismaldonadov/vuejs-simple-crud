<template>
  <div id="app" class="container">
    <!-- My injected custom navigation bar -->
    <TheNavigationBar />
    <!-- Page transition implementation -->
    <transition
      @enter="enter"
      @leave="leave">
      <!-- All the router views get injected here -->
      <router-view />
    </transition>
    <!--
    <TheFooter class="footer" />
    -->
  </div>
</template>

<script>
// @ is an alias to /src
import TheNavigationBar from '@/components/TheNavigationBar.vue';
// import TheFooter  from '@/components/TheFooter.vue';
export default {
  data() {
    return {};
  },
  components: {
    TheNavigationBar,
  },
  methods: {
    // Done callback needed for animation, as needed for JS only transitions.
    /*
    enter(element, done) {},
    leave(element, done) {},
    */
  },
};
</script>

<style lang="scss">
.content {
}
.header {
}
</style>
