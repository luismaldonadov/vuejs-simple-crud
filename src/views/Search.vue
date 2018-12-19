<template>
  <div class="data-container">
  <!-- Pass the props to the components from our Vuex Store -->
    <DropDown />
    <DataTable :tableData="activeTable" :columns="activeColumns" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DataTable from '@/components/DataTable.vue';
import DropDown from '@/components/DropDown.vue';
import 'vue-awesome/icons/times-circle';

export default {
  name: 'Search',
  components: {
    DataTable,
    DropDown,
  },
  computed: mapState({
    activeTable: state => state.tables.activeTable.data,
    activeColumns: state => state.tables.activeTable.columnHeaders,
    users: state => state.users.all,
  }),
  methods: {
  },
};
</script>

<style lang="scss">
.data-container {
  grid-area: bodyContainer;
  align-self: stretch;
  justify-self: center;
  min-width: 90%;
}

.row-buttons {
}
</style>

<style lang="scss" scoped>

</style>
