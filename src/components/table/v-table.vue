<template>
  <div class="v-table">
    <div class="v-table__header">
      <p class="fb-3" @click="sortByName">
        Name
        <i class="material-icons">
          unfold_more
        </i>
      </p>
      <p class="fb-3" @click="sortByEmail">
        Email<span class="material-icons">
          unfold_more
        </span>
      </p>
      <p class="fb-6" @click="sortByComments">
        Comment<span class="material-icons">
          unfold_more
        </span>
      </p>
    </div>
    <div class="v-table__body">
      <vTableRow
        v-for="row in paginatedComments"
        :key="row.id"
        :row_data="row"
      />
    </div>
    <div class="v-table__pagination">
      <div
        class="page"
        v-for="page in pages"
        :key="page"
        :class="{ page__selected: page === pageNumber }"
        @click="pageClick(page)"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import vTableRow from './v-table-row';

export default {
  name: 'vTable',
  components: {
    vTableRow,
  },
  props: {
    comments_data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      commentsPerPage: 10,
      pageNumber: 1,
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.comments_data.length / 10);
    },
    paginatedComments() {
      let from = (this.pageNumber - 1) * this.commentsPerPage;
      let to = from + this.commentsPerPage;
      return this.comments_data.slice(from, to);
    },
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
    sortByName() {
      this.comments_data.sort((a, b) => a.name.localeCompare(b.name));
    },
    sortByEmail() {
      this.comments_data.sort((a, b) =>
        a.email.localeCompare(b.email)
      );
    },
    sortByComments() {
      this.comments_data.sort((a, b) => a.body.localeCompare(b.body));
    },
  },
};
</script>

<style lang="scss">
.v-table {
  max-width: 900px;
  margin: 10px auto;
  &__header {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid rgb(90, 90, 90);
    & p {
      display: flex;
      justify-content: center;
      align-items: center;
      // text-align: left;
      padding: 5px 15px;
      font-weight: bold;
      cursor: pointer;
    }
    .fb-3 {
      flex-basis: 25%;
    }
    .fb-6 {
      flex-basis: 50%;
    }
  }
  &__pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
    .page {
      padding: 5px;
      margin: 2px;
      border: 1px solid rgb(136, 136, 136);
      &:hover {
        background: rgb(190, 190, 190);
        cursor: pointer;
        color: #ffffff;
      }
      &__selected {
        background: rgb(190, 190, 190);
        cursor: pointer;
        color: #ffffff;
      }
    }
  }
}
</style>
