<template>
  <Menu
    :navigation="[
      { name: 'Home', href: '#', current: true },
      { name: 'Team', href: '#', current: false },
      { name: 'Projects', href: '#', current: false },
      { name: 'Calendar', href: '#', current: false },
    ]"
  />
  <Grid :products="obj" />
  <Modal />
</template>

<script>
import Menu from "./components/Navbar.vue";
import Grid from "./components/Grid.vue";
import Modal from "./components/Modal.vue";
import emojiData from "./assets/emojidata.json";

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