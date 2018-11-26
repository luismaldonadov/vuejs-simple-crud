<template>
  <div id="app">
    <!-- My injected custom navigation bar -->
    <TheNavigationBar />
    <!-- Page transition implementation -->
    <transition
      @enter="enter"
      @leave="leave"
      :css="false">
      <!-- All the router views get injected here -->
      <router-view/>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import { TimelineMax } from 'gsap';
import TheNavigationBar from '@/components/TheNavigationBar.vue';

export default {
  data() {
    return {
      pageTransitionStarted: false,
      pageTransitionComplete: false,
    };
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
      tl.set(element, {
        x: -(window.innerWidth * 0.2),
        scale: 0.9,
        opacity: 0.05,
        transformOrigin: '50% 50%',
      });
      tl.to(element, 0.2, {
        x: 0,
        /* eslint-disable-next-line */
        ease: Power4.easeOut,
      });
      tl.to(element, 1, {
        scale: 1,
        opacity: 1,
        /* eslint-disable-next-line */
        ease: Power4.easeOut,
      });
    },
    leave(element, done) {
      const tl = new TimelineMax({
        onComplete: done,
      });
      tl.set(element, {
        scale: 0.9,
        opacity: 0.1,
        transformOrigin: '50% 50%',
      });
      tl.to(element, 0.5, {
        x: (window.innerWidth * 1.1),
        /* eslint-disable-next-line */
        ease: Power4.easeOut,
      });
    },
  },
};
</script>

<style lang="scss">
// Import scss file that has Bulma reference and custom CSS
@import "./assets/scss/main.scss";
</style>
