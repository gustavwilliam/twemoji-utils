<template>
  <TheNavbar
    :navigation="[
      { name: 'Home', href: '/', current: true },
      {
        name: 'GitHub',
        href: 'https://github.com/gustavwilliam/twemoji-utils',
        current: false,
      },
    ]"
  />
  <TheMainContentFrame>
    <SearchBar v-model="searchText" label="Find an emoji" />
    <EmojiGrid
      @open-modal="this.$refs.modal.openModal($event)"
      :products="paginatedEmojiList"
    />
    <PaginationIndicator
      :currentPage="currentPage"
      :numberOfPages="numberOfPages"
      @set-pagination-index="currentPage = $event"
    />
  </TheMainContentFrame>
  <EmojiDownloadModal ref="modal" />
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheMainContentFrame from "@/components/TheMainContentFrame.vue";
import EmojiGrid from "@/components/EmojiGrid.vue";
import EmojiDownloadModal from "@/components/EmojiDownloadModal.vue";
import SearchBar from "@/components/SearchBar.vue";
import PaginationIndicator from "@/components/Pagination/PaginationIndicator.vue";
import emojiData from "@/assets/emojidata-s.json";

export default {
  name: "Home",
  components: {
    TheNavbar,
    TheMainContentFrame,
    EmojiGrid,
    EmojiDownloadModal,
    SearchBar,
    PaginationIndicator,
  },

  data() {
    return {
      gridData: emojiData,
      searchText: "",
      itemsPerPage: 45,
      currentPage: 0,
    };
  },

  computed: {
    filteredEmojiList() {
      return this.gridData.filter((item) => {
        return (
          item.name.includes(this.searchText.toLowerCase()) ||
          item.codepoint.includes(this.searchText.toLowerCase())
        );
      });
    },
    numberOfPages() {
      return Math.floor(this.filteredEmojiList.length / this.itemsPerPage);
    },
    paginatedEmojiList() {
      return this.filteredEmojiList.slice(
        this.itemsPerPage * this.currentPage,
        this.itemsPerPage * (this.currentPage + 1)
      );
    },
  },
};
</script>