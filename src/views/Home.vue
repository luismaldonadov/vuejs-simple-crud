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
      <h1 @mouseover="mouseOver($event)"
          @mousemove="mouseMove($event)">Tools used</h1>
        <ul>
          <li @mouseover="mouseOver($event)"
              @mousemove="mouseMove($event)">Vuex</li>
          <li @mouseover="mouseOver($event)"
              @mousemove="mouseMove($event)">Vue-router</li>
          <li @mouseover="mouseOver($event)"
              @mousemove="mouseMove($event)">GSAP for animations</li>
          <li @mouseover="mouseOver($event)"
              @mousemove="mouseMove($event)">Buefy</li>
          <li @mouseover="mouseOver($event)"
              @mousemove="mouseMove($event)">This will be a PWA</li>
          <li @mouseover="mouseOver($event)"
              @mousemove="mouseMove($event)">Fake data, real API endpoints used: <a href="https://reqres.in/">https://reqres.in/</a> and <a href="https://jsonplaceholder.typicode.com/">https://jsonplaceholder.typicode.com/</a></li>
          <li></li>
        </ul>
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap';
import { mapState } from 'vuex';

export default {
  name: 'home',
  data() {
    return {};
  },
  components: {},
  methods: {
    setActiveAnimationElement(domElement) {
      this.$store.dispatch('mouseElement/activeElement', domElement.target);
    },
    mouseOver: function mouseOverElement(element) {
      this.setActiveAnimationElement(element);
      this.elementZoomAnimation();
    },
    mouseMove: function mouseMoveElement(element) {
      this.setActiveAnimationElement(element);
      this.elementZoomAnimation();
    },
    elementZoomAnimation() {
      TweenMax.to(this.activeElement, 0.1, {
        scaleX: 1.1,
        scaleY: 1.1,
        transformOrigin: `${this.activeElement.clientX}px
                          ${this.activeElement.clientY}px`,
      }, { onComplete: this.transitionOrAnimationCompleted });
    },
    cancelPreviousElementZoomAnimation() {
      if (this.previousElement !== null || this.previousElement !== undefined) {
        TweenMax.killTweensOf(this.previousElement, { scale: 1 });
      }
    },
    /*
    transitionOrAnimationCompleted() {
      return true;
    },
    mouseOver: function mouseOverElement(domElement) {
      // console.log(`X:${domElement.clientX} Y: ${domElement.clientY}`);

    },
    leave: function leftElementAnimation(el, transitionCompleted) {
      // Call the callback function that sets the done state for animation
      // transitionOrAnimationCompleted();
    },
    */
  },
  computed: mapState({
    // Map state data to local data
    activeElement: state => state.mouseElement.activeElement,
    previousElement: state => state.mouseElement.previousElement,
  }),
  watch: {
    previousElement() {
      console.log('Previous element has changed');
      this.cancelPreviousElementZoomAnimation();
    },
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

};
</script>

<style scoped lang="scss">
.column.is-8.is-offset-1.has-vertically-aligned-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
