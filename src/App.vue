<template>
  <div class="app">
    <v-table :comments_data="USERS" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import vTable from '@/components/table/v-table.vue';

export default {
  name: 'App',

  components: {
    vTable,
  },

  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['GET_USER_FROM_API']),
  },
  computed: {
    ...mapGetters(['USERS']),
  },
  mounted() {
    this.GET_USER_FROM_API();
  },
};
</script>
<style lang="scss">
.app {
  margin-top: 50px;
  font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
