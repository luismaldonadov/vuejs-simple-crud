<template>
  <div class="select-container">
    <p>Select table:</p>
    <select @change="onChange($event)"  class="table-select" >
      <option value="">-- Select a table --</option>
      <option v-for="(tableName, index) in availableTables"
        :value="tableName"
        :selected="0"
        :key="index">
        {{ tableName | normalizeColumnName }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DropDown',
  computed: mapState({
    selected: state => state.tables.selected,
    availableTables: state => state.tables.allTableNames,
  }),
  methods: {
    onChange(event) {
      this.$store.dispatch('tables/startLoadingTable');
      switch (event.target.value) {
        case 'users':
          this.$store.dispatch(`${event.target.value}/fetchUsers`);
          break;
        case 'todos':
          this.$store.dispatch(`${event.target.value}/fetchTodos`);
          break;
        case 'comments':
          this.$store.dispatch(`${event.target.value}/fetchComments`);
          break;
        default:
          this.$store.dispatch('tables/finishLoadingTable');
          this.$store.dispatch('tables/selectedTable', {
            name: '',
            columnHeaders: [],
            data: [],
          });
          console.log('Unexpected stuff');
      }
    },
  },
  filters: {
    normalizeColumnName: function normalizeColumnName(columnName) {
      const oldColumnName = columnName;
      if (!oldColumnName) return '';
      // @todo Match more than one word in array column name
      const newColumnName = oldColumnName.toString();
      return newColumnName.charAt(0).toUpperCase() + newColumnName.slice(1);
    },
  },
};
</script>

<style lang="scss" scoped>
.select-container {
  margin-top: 18px;
  display: flex;
  min-width: 90vw;
  align-items: center;
  justify-content: flex-start;
}
p {
  margin-right: 15px;
}
select {
  font-family: $theme-font;
  margin-right: 15px;
}

</style>
