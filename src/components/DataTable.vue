<template>
  <div>
    <div class="spinner-container" v-if="isLoading">
      <div class="spinner"></div>
    </div>

    <div @click="closeModal()"
      class="modal-background-fs"
      v-if="modalSettings.fullScreenBackground">
    </div>
    <div class="modal-switch" v-if="modalSettings.showDeleteModal">
      <div class="modal-container">
        <div class="modal-heading">
          <span @click="closeModal()">
            <v-icon class="times-circle" name="times-circle"></v-icon>
          </span>
        </div>
        <div class="modal-content">
          <span>Do you want to remove this item?</span>
          <p>Id: {{ selectedRowItem.id }}</p>
          <p v-html="itemDescriptor(selectedRowItem)"></p>
          <div class="action-buttons">
            <button @click="deleteItem()">Accept</button>
            <button @click="closeModal()">Cancel</button>
          </div>
        </div>
      </div>
    </div>

    <table :class="[isTableVisible ? 'active' : '', 'inactive']">
      <thead id="table-header">
        <tr>
          <th v-for="(columnName, index) in columns" :key="index">
            {{ columnName | normalizeColumnName }}
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="rowItem in tableData" :key="rowItem.id">
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
import { mapState } from 'vuex';

export default {
  name: 'DataTable',
  props: {
    tableData: Array,
    columns: Array,
    filter: String,
  },
  data() {
    return {
      isTableVisible: false,
      selectedRowItem: {},
      modalSettings: {
        showEditModal: false,
        showDeleteModal: false,
        fullScreenBackground: false,
      },
    };
  },
  computed: mapState({
    isLoading: state => state.tables.isLoading,
  }),
  watch: {
    isLoading(newStatus) {
      if (newStatus === false) {
        // Set to invisible the class table when loading
        this.isTableVisible = true;
      } else if (newStatus === true) {
        // Set to visible the class table when finished loading
        this.isTableVisible = false;
      }
    },
    tableData(newData) {
      // When we submit an empty payload to our state, hide the table.
      if (newData.length === 0) {
        this.isTableVisible = false;
      }
    },
  },
  methods: {
    editModal(rowItem) {
      this.selectedRowItem = rowItem;
      this.modalSettings.fullScreenBackground = true;
      this.modalSettings.showEditModal = true;
    },
    deleteModal(rowItem) {
      this.selectedRowItem = rowItem;
      this.modalSettings.fullScreenBackground = true;
      this.modalSettings.showDeleteModal = true;
    },
    closeModal() {
      this.selectedRowItem = {};
      this.modalSettings.showEditModal = false;
      this.modalSettings.showDeleteModal = false;
      this.modalSettings.fullScreenBackground = false;
    },
    updateItem() {
      this.$store.dispatch('tables/updateTableRecord', this.selectedRowItem);
    },
    deleteItem() {
      this.$store.dispatch('tables/deleteTableRecord', this.selectedRowItem.id);
      this.closeModal();
    },
    itemDescriptor(rowItem) {
      if (rowItem.title) {
        return `Title : ${rowItem.title}`;
      }
      return `Name : ${rowItem.name}`;
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
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 90vw;
  min-height: 60vh;
}

.spinner {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid $main-color; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.modal-background-fs {
  width: 100%;
  height: 100%;
  z-index: 9998;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: auto;
  font-family: $theme-font;
}

.modal-switch {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-container {
  width: 500px;
  height: 275px;
  background-color: #fff;
  padding-bottom: 10px;
  span {
    font-size: 24px;
    font-weight: 900;
  }

  .modal-heading {
    height: 40px;
    background: $main-color;
  }

  .modal-content {
    padding-left: 20px;

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
  }
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

table.inactive {
  visibility: hidden;
}

table.active {
  visibility: visible;
  position: relative;
  top: 1rem;
  width: 90vw;
  min-height: 60vh;
  margin-bottom: 17px;
}

thead {
  font-size: 24px;
 tr {
   th {
     border-top: 3px solid $main-color;
     border-bottom: 3px solid $main-color;
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
      width: 5vw;

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
