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
  <ErrorMessagePage
    errorCode="404"
    header="Page not found"
    description="Sorry, but the page you're looking for doesn't seem to exist."
  />
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import ErrorMessagePage from "@/components/ErrorMessagePage.vue";

export default {
  name: "Page404",
  components: { TheNavbar, ErrorMessagePage },
};
</script>