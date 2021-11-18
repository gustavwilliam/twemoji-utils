<template>
  <div class="px-4 py-3 flex items-center justify-between sm:px-6">
    <div class="flex-1 flex justify-between sm:hidden">
      <PaginationMobileButton content="Previous" />
      <PaginationMobileButton content="Next" />
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-around">
      <div>
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <PaginationIndicatorButton @click="setPageIndex(currentPage - 1)">
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </PaginationIndicatorButton>

          <PaginationIndicatorButton
            v-for="index in numberOfPages"
            :key="index"
            :index="index"
            :active="index === currentPageUserVersion"
            @click="setPageIndex(index - 1)"
          />
          <!-- Subtract 1 from `index` to adjust for 1-indexing -->

          <PaginationIndicatorButton @click="setPageIndex(currentPage + 1)">
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </PaginationIndicatorButton>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";
import PaginationIndicatorButton from "./PaginationIndicatorButton.vue";
import PaginationMobileButton from "./PaginationMobileButton.vue";

export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    PaginationIndicatorButton,
    PaginationMobileButton,
  },

  props: {
    currentPage: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 0;
      },
    },
    numberOfPages: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 0;
      },
    },
  },

  emits: ["set-pagination-index"],

  computed: {
    currentPageUserVersion() {
      return this.currentPage + 1;
    },
  },

  methods: {
    setPageIndex(index) {
      console.log(`Setting page: ${index}`);
      this.$emit("set-pagination-index", index);
    },
  },
};
</script>