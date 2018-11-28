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
import { TimelineMax } from 'gsap';
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
    enter(element, done) {
      const tl = new TimelineMax({
        onComplete: done,
      });
      tl.fromTo(element, 0.5,
        {
          x: -200,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
        });
    },
    leave(element, done) {
      const tl = new TimelineMax({
        onComplete: done,
      });
      tl.fromTo(element, 0.5,
        { autoAlpha: 1 },
        { autoAlpha: 0 });
    },
  },
};
</script>

<style lang="scss">
.content {
}
.header {
}
// Import scss file that has Bulma reference and custom CSS
</style>
