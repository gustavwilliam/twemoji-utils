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
    <EmojiGrid :products="filteredEmojiList" />
  </TheMainContentFrame>
  <EmojiDownloadModal ref="modal" />
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheMainContentFrame from "@/components/TheMainContentFrame.vue";
import EmojiGrid from "@/components/EmojiGrid.vue";
import EmojiDownloadModal from "@/components/EmojiDownloadModal.vue";
import SearchBar from "@/components/SearchBar.vue";
import emojiData from "@/assets/emojidata-s.json";

export default {
  name: "Home",
  components: {
    TheNavbar,
    TheMainContentFrame,
    EmojiGrid,
    EmojiDownloadModal,
    SearchBar,
  },

  data() {
    return {
      gridData: emojiData,
      searchText: "",
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
  },
};
</script>