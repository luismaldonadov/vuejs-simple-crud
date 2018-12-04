<template>
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tfoot></tfoot>
      <tbody></tbody>
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
  data() {
  },
};
</script>

<style scoped>

</style>
