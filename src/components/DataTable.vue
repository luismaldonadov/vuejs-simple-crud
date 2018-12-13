<template>
  <div>
    <transition name="modal" v-if="showModal">
      <div class="modal-container">
        <div class="modal">
          <div class="modal-heading">
            <span @click="closeModal()">
              <v-icon class="times-circle" name="times-circle"></v-icon>
            </span>
          </div>
          <div class="modal-content">
            <span>Do you want to remove this item?</span>
            <p>Id: {{ selectedRowItem.id }} Name: {{ selectedRowItem.name }}</p>
            <div class="action-buttons">
              <button @click="deleteItem()">Accept</button>
              <button @click="closeModal()">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </transition>

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
              <span @click="editModal(rowItem)">
                <v-icon  class="edit" name="edit"></v-icon>
              </span>
              <span @click="deleteModal(rowItem)">
                <v-icon  class="delete" name="trash-alt"></v-icon>
              </span>
          </div>
        </tr>
      </tbody>
      <tfoot>
        <!-- Table Pagination -->
      </tfoot>
    </table>
  </div>
</template>

<script>
import 'vue-awesome/icons/trash-alt';
import 'vue-awesome/icons/edit';
import 'vue-awesome/icons/search';
import 'vue-awesome/icons/check-circle';
import 'vue-awesome/icons/save';
import 'vue-awesome/icons/times-circle';

export default {
  name: 'DataTable',
  props: {
    data: Array,
    columns: Array,
    filter: String,
  },
  data() {
    return {
      showModal: false,
      selectedRowItem: {},
    };
  },
  methods: {
    editModal(rowItem) {
      this.$store.dispatch('tables/updateTableRecord', rowItem);
    },
    deleteModal(rowItem) {
      this.selectedRowItem = rowItem;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    deleteItem() {
      this.$store.dispatch('tables/deleteTableRecord', this.selectedRowItem.id);
      this.closeModal();
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
.modal-container {
  width: 100%;
  height: 100%;
  z-index: 9998;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: $theme-font;
}

.modal {
  width: 500px;
  height: 250px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-content {
  padding: 20px;
  span {
    font-size: 24px;
    font-weight: 900;
  }
}

.action-buttons {
    margin-top: 40px;
    text-align: center;
    button {
      display: inline-block;
      border: none;
      padding: 1rem 2rem;
      margin-right: 10px;
      background: $main-color;
      color: #ffffff;
      font-family: $theme-font;
      font-size: 1rem;
      cursor: pointer;
      text-align: center;
      transition: background 250ms ease-in-out,
      transform 150ms ease;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
    button:hover,
    button:focus {
      background: $complementary-color;
    }
    button:focus {
      outline: 1px solid #fff;
      outline-offset: -4px;
    }
    button:active {
        transform: scale(0.99);
        transform: translateZ(0px);
    }
}

.modal-heading {
  width: 100%;
  height: 40px;
  background: $main-color;
}

.times-circle {
  width: 24px;
  height: 24px;
  display: block;
  float: right;
  margin-right: 10px;
  color: #fff;

  // CSS Trick to center vertically
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  :hover{
    color: $complementary-color;
  }
}

.item{
  padding: 15%;
}

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
