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
          <PaginationIndicatorButton>
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </PaginationIndicatorButton>
          <PaginationIndicatorButton :index="1" :active="true" />
          <PaginationIndicatorButton :index="2" />
          <PaginationIndicatorButton :index="3" :showOnMobile="false" />
          <PaginationIndicatorButton>...</PaginationIndicatorButton>
          <PaginationIndicatorButton :index="8" :showOnMobile="false" />
          <PaginationIndicatorButton :index="9" />
          <PaginationIndicatorButton :index="10" />
          <PaginationIndicatorButton>
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
};
</script>