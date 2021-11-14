<template>
  <TheNavbar
    :navigation="[
      { name: 'Home', href: '#/', current: true },
      {
        name: 'GitHub',
        href: 'https://github.com/gustavwilliam/twemoji-utils',
        current: false,
      },
    ]"
  />
  <TheBanner
    :messageShort="'Check this out on GitHub'"
    :messageLong="'Check out this project on GitHub!'"
    :url="'https://github.com/gustavwilliam/twemoji-utils'"
  />
  <EmojiGrid :products="obj" />
  <EmojiDownloadModal ref="modal" />
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheBanner from "./components/TheBanner.vue";
import EmojiGrid from "./components/EmojiGrid.vue";
import EmojiDownloadModal from "./components/EmojiDownloadModal.vue";
import emojiData from "./assets/emojidata-s.json";

export default {
  name: "App",
  components: { TheNavbar, EmojiGrid, EmojiDownloadModal, TheBanner },
  data() {
    return {
      obj: emojiData,
    };
  },
};
</script>