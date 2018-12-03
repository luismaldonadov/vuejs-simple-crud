<template>
  <div class="home-body">
    <div class="home-body-content">
      <img src='../assets/svg/vuejs_logo.svg' alt="altText"/>
      <!-- Pass the DOM element which the mouse has the event
      this is a method within this component -->
      <h2
          @mouseover="renderZoomElementAnimation($event)"
          @mousemove="renderZoomElementAnimation($event)">Tools used</h2>
        <ul>
          <li @mouseover="renderZoomElementAnimation($event)"
              @mousemove="renderZoomElementAnimation($event)">Vuex</li>
          <li @mouseover="renderZoomElementAnimation($event)"
              @mousemove="renderZoomElementAnimation($event)">Vue-router</li>
          <li @mouseover="renderZoomElementAnimation($event)"
              @mousemove="renderZoomElementAnimation($event)">This will be a PWA</li>
          <li @mouseover="renderZoomElementAnimation($event)"
              @mousemove="renderZoomElementAnimation($event)">Fake data, real API endpoints used: <a href="https://reqres.in/">https://reqres.in/</a> and <a href="https://jsonplaceholder.typicode.com/">https://jsonplaceholder.typicode.com/</a></li>
          <li>CSS Animations for some elements</li>
        </ul>
        <p>
          This a small project that i made in order to learn
          to use Vue.js properly.
          Basic create, read, update and delete operations
          from real REST API endpoints are included
      </p>
    </div>
</div>
</template>

<script>
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
    },
    renderOriginalElementState() {
      // Set the element to its original state
      if (this.previousElement !== null || this.previousElement !== undefined) {
        // TODO
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
.home-body {
  // Values to set here as a child of the parent grid
  margin-top: 25px;
  width: $navbar-width-desktop;
  height: $body-container-height;
  place-self: center center;
  // Nested grid
  display:grid;
}

.home-body-content {
  place-self : center center;

  h2 {
    text-align: center;
  }
  img {
    top: 0px;
    float: left;
    shape-outside: circle(50%);
    border-radius: 50%;
    margin-right: 3em;
    box-shadow: 0px 5px 5px 5px #ccc;
  }

  ul,p {
    width: 65vw;
  }
}
</style>
