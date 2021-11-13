<template>
  <Menu
    :navigation="[
      { name: 'Home', href: '#/', current: true },
      {
        name: 'GitHub',
        href: 'https://github.com/gustavwilliam/twemoji-utils',
        current: false,
      },
    ]"
  />
  <Grid :products="obj" />
  <Modal ref="modal" />
</template>

<script>
import Menu from "./components/Navbar.vue";
import Grid from "./components/Grid.vue";
import Modal from "./components/Modal.vue";
import emojiData from "./assets/emojidata-s.json";

export default {
  name: "App",
  components: { Menu, Grid, Modal },
  data() {
    return {
      obj: emojiData,
    };
  },
};
</script>