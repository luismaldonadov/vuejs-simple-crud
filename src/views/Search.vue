<template>
  <div class="data-container">
    <!-- Pass the props to the component DataTable -->
    <DataTable :data="users" :columns="columns" />
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
    columns: state => state.Users.tableColumns,
  }),
  methods: {
  },
};
</script>

<style lang="scss">
.data-container {
  width: $navbar-width-desktop;
  justify-self: center;
  grid-column: 1;
  display: grid;
}

.row-buttons {
}
</style>

<style lang="scss" scoped>

</style>
