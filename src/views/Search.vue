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
  mounted() {
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

<style scoped>
.data-container {
  place-self: center center;
}
</style>
