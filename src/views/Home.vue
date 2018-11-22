<template>
  <div id="home" class="container is-fluid">
    <div class="columns">
      <div class="column is-3">
        <img class="vue-logo" alt="Vue logo" src="../assets/svg/vuejs_logo.svg">
      </div>
      <div class="column is-8 is-offset-1 has-vertically-aligned-content">
        <div class="content is-large">
          <h1>
            Vue.js simple CRUD app
          </h1>
          <p>
            This a small project that i made in order to learn
            to use Vue.js properly.
            Basic create, read, update and delete operations
            from real REST API endpoints are included.
          </p>
        </div>
      </div>
    </div>
    <div id="tools" class="content is-medium">
      <!-- Pass the DOM element which the mouse has the event
       this is a method within this component -->
      <h1 @mouseover="mouseOver($event)">Tools used</h1>
        <ul>
          <li>Vuex</li>
          <li>Vue-router</li>
          <li>GSAP for animations</li>
          <li>Buefy</li>
          <li>This will be a PWA</li>
          <li>Fake data, real API endpoints used: <a href="https://reqres.in/">https://reqres.in/</a> and <a href="https://jsonplaceholder.typicode.com/">https://jsonplaceholder.typicode.com/</a></li>
          <li></li>
        </ul>
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap';

export default {
  name: 'home',
  components: {},
  methods: {
    transitionOrAnimationCompleted() {
      return true;
    },
    mouseOver: function mouseOverElement(domElement) {
      console.log(`X:${domElement.clientX} Y: ${domElement.clientY}`);
      TweenMax.to(domElement.target, 0.025, {
        scale: 1.1,
        transformOrigin: `${domElement.clientX}px ${domElement.clientY}px`,
        translateZ: 0,
      }, { onComplete: this.transitionOrAnimationCompleted });
    },
    /*
    leave: function leftElementAnimation(el, transitionCompleted) {
      // Call the callback function that sets the done state for animation
      // transitionOrAnimationCompleted();
    },
    */
  },
  mounted() {
    const tl = new TimelineMax({
      onComplete: this.transitionOrAnimationCompleted,
    });
    tl.set(this.$el, {
      x: -(window.innerWidth * 0.2),
      scale: 0.9,
      opacity: 0.05,
      transformOrigin: '50% 50%',
    });
    tl.to(this.$el, 0.2, {
      x: 0,
      /* eslint-disable-next-line */
      ease: Power4.easeOut,
    });
    tl.to(this.$el, 1, {
      scale: 1,
      opacity: 1,
      /* eslint-disable-next-line */
      ease: Power4.easeOut,
    });
  },
  beforeDestroy() {
    TweenMax.fromTo(this.$el, 1, {
      autoAlpha: 1,
    }, {
      autoAlpha: 0,
      /* eslint-disable-next-line */
      ease: Power4.easeOut,
      onComplete: this.transitionOrAnimationCompleted,
    });
  },
};
</script>

<style scoped lang="scss">
.column.is-8.is-offset-1.has-vertically-aligned-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
