<template>
  <nav class="level">
    <div class="level-left">
      <div class="level-item">
        <p class="subtitle is-5">
          <strong>It's easy to
            <span class="icon is-large has-text-danger"><heart /></span>
            Vue.js !
          </strong>
        </p>
      </div>
    </div>

    <div class="level-right">
      <p class="level-item">
        <router-link to="/">
          <span class="icon is large"><home-circle /></span>
        </router-link>
      </p>
      <p class="level-item">
        <router-link to="/data-visualization">
          <span class="icon is large"><database /></span>
        </router-link>
      </p>
    </div>
  </nav>
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
.level{
  padding: 1rem;
}
</style>
