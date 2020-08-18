<template>
  <div class="v-table-row">
    <div class="row fb-3 row__name">{{ row_data.name }}</div>
    <div class="row fb-3 row__email">{{ row_data.email }}</div>
    <div class="row fb-6 row__comment">{{ row_data.body }}</div>
  </div>
</template>

<script>
export default {
  name: 'v-table-row',
  props: {
    row_data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
.v-table-row {
  display: flex;
  justify-content: space-around;
}
.row {
  flex-basis: 25%;
  padding: 5px 10px;
  text-align: left;
}
.fb-3 {
  flex-basis: 25%;
}
.fb-6 {
  flex-basis: 50%;
}
</style>
