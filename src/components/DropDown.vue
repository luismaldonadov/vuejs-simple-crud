<template>
  <div class="select-container">
    <p>Select table:</p>
    <select @change="onChange($event)" name="" class="table-select" :value="selected">
      <option value="users">Users</option>
      <option value="todos">Todos</option>
      <option value="photos">Photos</option>
      <option value="albums">Albums</option>
      <option value="comments">Comments</option>
      <option value="posts">Posts</option>
    </select>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DropDown',
  computed: mapState({
    selected: state => state.Tables.selected,
  }),
  methods: {
    onChange(event) {
      switch (event.target.value) {
        case 'users':
          this.$store.dispatch('Users/fetchUsers');
          break;
        default:
          console.log('Unexpected shit');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.select-container {
  margin-top: 18px;
}
p {
  display: inline-block;
  margin-right: 15px;
}
select {
  display: inline-block;
  font-family: $theme-font;
  margin-right: 15px;
}

</style>
