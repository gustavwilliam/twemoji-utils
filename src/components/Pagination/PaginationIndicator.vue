<template>
  <div class="px-2 py-3 flex items-center justify-between sm:px-6">
    <div class="flex-1 flex justify-between items-center sm:hidden">
      <PaginationMobileButton
        content="Previous"
        @click="setPageIndex(currentPage - 1)"
        v-if="currentPage !== 0"
      />
      <p class="text-gray-500 text-sm">
        Page {{ currentPage }} of {{ numberOfPages }}
      </p>
      <PaginationMobileButton
        content="Next"
        @click="setPageIndex(currentPage + 1)"
        v-if="currentPage !== numberOfPages - 1"
      />
    </div>
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-around">
      <div>
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <PaginationIndicatorButton
            :min-width="true"
            @click="setPageIndex(0)"
            v-if="currentPage !== 0"
          >
            <span class="sr-only">First</span>
            <ChevronDoubleLeftIcon class="h-5 w-5" aria-hidden="true" />
          </PaginationIndicatorButton>
          <PaginationIndicatorButton
            :min-width="true"
            @click="setPageIndex(currentPage - 1)"
            v-if="currentPage !== 0"
          >
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </PaginationIndicatorButton>

          <PaginationIndicatorButton
            v-for="index in numberOfPages"
            :key="index"
            :index="index"
            :active="index === currentPageUserVersion"
            v-show="showPage(index - 1)"
            @click="setPageIndex(index - 1)"
          />
          <!-- Subtract 1 from `index` to adjust for 1-indexing -->

          <PaginationIndicatorButton
            @click="setPageIndex(currentPage + 1)"
            :min-width="true"
            v-if="currentPage !== numberOfPages - 1"
          >
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </PaginationIndicatorButton>
          <PaginationIndicatorButton
            @click="setPageIndex(numberOfPages - 1)"
            :min-width="true"
            v-if="currentPage !== numberOfPages - 1"
          >
            <span class="sr-only">Last</span>
            <ChevronDoubleRightIcon class="h-5 w-5" aria-hidden="true" />
          </PaginationIndicatorButton>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/vue/solid";
import PaginationIndicatorButton from "./PaginationIndicatorButton.vue";
import PaginationMobileButton from "./PaginationMobileButton.vue";

export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
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
      this.$emit("set-pagination-index", index);
    },
    showPage(index) {
      if (
        (this.currentPage <= 1 && index <= 4) ||
        (this.numberOfPages - this.currentPage <= 2 &&
          index >= this.numberOfPages - 5)
      ) {
        return true; // Always show 5 pages, if available
      }

      return this.currentPage - 2 <= index && index <= this.currentPage + 2;
    },
  },
};
</script>