<template>
  <Menu
    :navigation="[
      { name: 'Home', href: '#', current: true },
      { name: 'Team', href: '#', current: false },
      { name: 'Projects', href: '#', current: false },
      { name: 'Calendar', href: '#', current: false },
    ]"
  />
</template>

<script>
import Menu from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Menu },
};
</script>