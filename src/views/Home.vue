<template>
  <div class="home-body">
    <div class="home-body-content">
      <img src='../assets/svg/vuejs_logo.svg' alt="altText"/>
      <!-- Pass the DOM element which the mouse has the event
      this is a method within this component -->
      <h2>Tools used</h2>
        <ul>
          <li>Vuex</li>
          <li>Vue-router</li>
          <li>This will be a PWA</li>
          <li>Fake data, real API endpoint used: <a href="https://jsonplaceholder.typicode.com/">https://jsonplaceholder.typicode.com/</a></li>
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
export default {
  name: 'home',
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped lang="scss">
.home-body {
  grid-area: bodyContainer;
  // Values to set here as a child of the parent grid
  margin-top: 25px;
   // width: $navbar-width-desktop;
  // height: $body-container-height;
  // place-self: center center;
  // Nested grid
  // display:grid;
}

.home-body-content {
  place-self : center center;

  h2 {
    text-align: center;
  }
  img {
    top: 0px;
    float: left;
    margin-right: 3em;
  }

  ul,p {
    width: 65vw;
  }
}
</style>
