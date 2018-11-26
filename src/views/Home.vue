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
      <h1 @mouseover="renderZoomElementAnimation($event)"
          @mousemove="renderZoomElementAnimation($event)">Tools used</h1>
        <ul>
          <li @mouseover="renderZoomElementAnimation($event)"
              @mousemove="renderZoomElementAnimation($event)">Vuex</li>
          <li @mouseover="renderZoomElementAnimation($event)"
              @mousemove="renderZoomElementAnimation($event)">Vue-router</li>
          <li @mouseover="renderZoomElementAnimation($event)"
              @mousemove="renderZoomElementAnimation($event)">GSAP for animations</li>
          <li @mouseover="renderZoomElementAnimation($event)"
              @mousemove="renderZoomElementAnimation($event)">Buefy</li>
          <li @mouseover="renderZoomElementAnimation($event)"
              @mousemove="renderZoomElementAnimation($event)">This will be a PWA</li>
          <li @mouseover="renderZoomElementAnimation($event)"
              @mousemove="renderZoomElementAnimation($event)">Fake data, real API endpoints used: <a href="https://reqres.in/">https://reqres.in/</a> and <a href="https://jsonplaceholder.typicode.com/">https://jsonplaceholder.typicode.com/</a></li>
          <li></li>
        </ul>
    </div>
  </div>
</template>

<script>
import { TweenMax } from 'gsap';
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
    renderZoomElementAnimation(element) {
      // Set the current active element on which the mouse is
      this.setActiveAnimationElement(element);
      // Run the animation
      TweenMax.to(this.activeElement, 0.1, {
        scaleX: 1.1,
        scaleY: 1.1,
        transformOrigin: `${this.activeElement.clientX}px
                          ${this.activeElement.clientY}px`,
      }, { onComplete: this.transitionOrAnimationCompleted });
    },
    renderOriginalElementState() {
      // Set the element to its original state
      if (this.previousElement !== null || this.previousElement !== undefined) {
        TweenMax.killTweensOf(this.previousElement, { scale: 1 });
      }
    },
  },
  computed: mapState({
    // Map state data to local data
    activeElement: state => state.mouseElement.activeElement,
    previousElement: state => state.mouseElement.previousElement,
  }),
  watch: {
    previousElement() {
      console.log('Previous element has changed');
      this.renderOriginalElementState();
    },
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
