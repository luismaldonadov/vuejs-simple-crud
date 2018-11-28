<template>
  <div class="navbar">
    <div class="navbar-content">
      <div class="navbar-headline">
        <strong>It's easy to
          <heart /> Vue.js !
        </strong>
      </div>

      <ul class="navbar-icon-group">
        <router-link to="/" tag="li">
          <home-circle class="icon-2-i" />
          <li>Home</li>
        </router-link>
        <router-link to="/data-visualization" tag="li">
          <database class="icon-2-i" />
          <li>Read Data</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
// Material Design Icons, from a vue crafted npm package.
import Heart from 'vue-material-design-icons/Heart.vue';
import HomeCircle from 'vue-material-design-icons/HomeCircle.vue';
import Database from 'vue-material-design-icons/Database.vue';

export default {
  name: 'TheNavigationBar',
  components: {
    heart: Heart,
    'home-circle': HomeCircle,
    database: Database,
  },
};
</script>

<style scoped lang="scss">
.navbar {
  z-index: 1000;
  background-color: $main-color;
  grid-column: 1;
  grid-row: 1 ;
}
.navbar-content {
  display: grid;
  grid-template-columns: '1fr auto';
  grid-template-rows: auto;
  padding: 1rem;
}

.navbar-headline {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  min-width: 60rem;
  place-self: center stretch;
}
.navbar-headline strong {
  color: white;
  font-size: $font-p-size;
}

.navbar-icon-group {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  min-width: 12rem;
  max-width: 24rem;
  margin: auto;
  place-self: center end;
}

.navbar-icon-group li {
  display: inline-block;
  list-style-type: none;
  color: white;
  padding: 0.3rem;
  font-size: $font-nav-icons;
}
.navbar-icon-group li:hover,
.navbar-icon-group.router-link-active,
.navbar-icon-group.router-link-exact-active {
  cursor: pointer;
  :hover {
    color: $complementary-color;
  }
}
</style>
