<template>
    <table>
      <thead id="table-header">
        <tr>
          <th v-for="(columnName, index) in columns" :key="index">
            {{ columnName | normalizeColumnName }}
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rowItem in data" :key="rowItem.id">
          <td v-for="(columnName ,index) in columns" :key="index">
            {{ rowItem[columnName] }}
          </td>
            <div class="row-buttons">
            <span @click="editItem(rowItem)">
              <v-icon  class="edit" name="edit"></v-icon>
            </span>
            <span @click="deleteItem(rowItem)">
              <v-icon  class="delete" name="trash-alt"></v-icon>
            </span>
          </div>
        </tr>
      </tbody>
      <tfoot>
        <!-- Table Pagination -->
      </tfoot>
    </table>
</template>

<script>
import 'vue-awesome/icons/trash-alt';
import 'vue-awesome/icons/edit';
import 'vue-awesome/icons/search';
import 'vue-awesome/icons/check-circle';
import 'vue-awesome/icons/save';

export default {
  name: 'DataTable',
  props: {
    data: Array,
    columns: Array,
    filter: String,
  },
  methods: {
    editItem(rowItem) {
      this.$store.dispatch('tables/updateTableRecord', rowItem);
    },
    deleteItem(rowItem) {
      this.$store.dispatch('tables/deleteTableRecord', rowItem.id);
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
table {
  position: relative;
  top: 1rem;
  min-width: 90vw;
  min-height: 60vh;
  margin-bottom: 17px;
}

thead {
  font-size: 24px;
  background-color: #ccc;
 tr {
   th {
     margin-right: 150px;
     text-align: left;
     padding: 15px;
    }
 }
}
tbody {
  tr {
    td {
      padding: 5px;
    }
    .row-buttons {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      color: $main-color;

      .edit.fa-icon {
        margin-right: 15px;
      }

      .edit.fa-icon,
      .delete.fa-icon {
        display: table-cell;
        height: 24px;
        width: 24px;
        vertical-align: middle;
        :hover {
          color: $complementary-color;
        }
      }
     }
  }
}

</style>
