<template>
  <div class="data-container">
    <p>Nonsense text</p>
    <DataTable />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DataTable from '@/components/DataTable.vue';

export default {
  name: 'Search',
  components: {
    DataTable,
  },
  created() {
    this.$store.dispatch('Users/fetchUsers');
  },
  computed: mapState({
    users: state => state.Users.all,
  }),
  methods: {},
};
</script>

<style scoped>
.data-container {
  place-self: center center;
}
</style>
