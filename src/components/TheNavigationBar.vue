<template>
  <div class="navbar">
    <div class="navbar-content">
      <div class="navbar-headline">
        <strong>It's easy to
          <v-icon name="heart"/> Vue.js !
        </strong>
      </div>

      <ul class="navbar-icon-group">
        <router-link to="/" tag="li">
          <v-icon name="home"/>
          <div class="home-text">Home</div>
        </router-link>
        <router-link to="/search" tag="li">
          <v-icon name="search"/>
          <div class="search-text">Search</div>
        </router-link>
        <router-link to="/edit" tag="li">
          <v-icon name="edit"/>
          <div class="edit-text">Edit</div>
        </router-link>
      </ul>

    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/heart';
import 'vue-awesome/icons/home';
import 'vue-awesome/icons/edit';
import 'vue-awesome/icons/search';

export default {
  name: 'TheNavigationBar',
  components: {},
};
</script>
<style lang="scss">
.navbar {
  // Area where component belongs in main layuout
  grid-area: navBarContainer;
  // We need to place this as a child for the root grid
  min-width: $navbar-width-desktop;
  height: $navbar-height-desktop;
  place-self: stretch center;
  z-index: 1000;
  background-color: $main-color;
  // Sticky Header
  top: 0;
  margin-top: 0px;
  padding-top: 0px;
  position: sticky;
  // Shadow for the navbar
  box-shadow: 0px 5px 7px 5px #ccc;
}
</style>

<style scoped lang="scss">

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-headline {
  margin-left: 24px;
  min-width: 48rem;

  strong {
    color: white;
    font-size: 2em;
    font-family: $theme-font-display;

    .fa-icon {
      height: 32px;
      width: 32px;
    }
  }
}

.navbar-icon-group {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 6rem;
  max-width: 24rem;

  li {
    margin: 0px;
    text-align: center;
    padding-top: 12px;
    padding-bottom: 12px;
    min-height: 56px;
    min-width: 100px;
    list-style-type: none;
    color: white;

    .fa-icon {
      height: 32px;
      width: 32px;
    }
    div {
      display: none;
    }

      :hover {
        cursor: pointer;
        color: $complementary-color;
      }
  }
}

</style>
