<template>
  <div class="data-container">
  <!-- Pass the props to the components from our Vuex Store -->
    <DropDown />
    <DataTable :data="activeTable" :columns="activeColumns" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DataTable from '@/components/DataTable.vue';
import DropDown from '@/components/DropDown.vue';

export default {
  name: 'Search',
  components: {
    DataTable,
    DropDown,
  },
  created() {
    this.$store.dispatch('Users/fetchUsers');
  },
  computed: mapState({
    activeTable: state => state.Tables.activeTable,
    activeColumns: state => state.Tables.activeColumns,
    users: state => state.Users.all,
  }),
  methods: {
  },
  watch: {
    activeTable(newTable, oldTable) {
      console.log(newTable);
      console.log(oldTable);
    },
  },
};
</script>

<style lang="scss">
.data-container {
  grid-area: bodyContainer;
  align-self: stretch;
  justify-self: center;
}

.row-buttons {
}
</style>

<style lang="scss" scoped>

</style>
