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
  <EmojiGrid :products="obj" />
  <PaginationIndicator />
  <EmojiDownloadModal ref="modal" />
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import EmojiGrid from "@/components/EmojiGrid.vue";
import EmojiDownloadModal from "@/components/EmojiDownloadModal.vue";
import PaginationIndicator from "@/components/Pagination/PaginationIndicator.vue";
import emojiData from "@/assets/emojidata-s.json";

export default {
  name: "Home",
  components: { TheNavbar, EmojiGrid, EmojiDownloadModal, PaginationIndicator },
  data() {
    return {
      obj: emojiData,
    };
  },
};
</script>