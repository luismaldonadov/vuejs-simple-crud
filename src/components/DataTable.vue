<template>
    <table>
      <thead>
        <tr>
          <th v-for="(columnName, index) in columns" :key="index">
            {{ columnName | normalizeColumnName }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rowItem in data" :key="rowItem.id">
          <td v-for="(columnName ,index) in columns" :key="index">
            {{ rowItem[columnName] }}
          </td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    data: Array,
    columns: Array,
    filter: String,
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

<style scoped>

</style>
