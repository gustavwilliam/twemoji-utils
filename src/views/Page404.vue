<template>
  <TheNavbar
    :navigation="[
      { name: 'Home', href: '/', current: false },
      {
        name: 'GitHub',
        href: 'https://github.com/gustavwilliam/twemoji-utils',
        current: false,
      },
    ]"
  />
  <h1>404 not found</h1>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  name: "404",
  components: { TheNavbar },
};
</script>