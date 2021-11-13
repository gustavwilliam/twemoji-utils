<template>
  <Menu
    :navigation="[
      { name: 'Home', href: '#', current: true },
      { name: 'Team', href: '#', current: false },
      { name: 'Projects', href: '#', current: false },
      { name: 'Calendar', href: '#', current: false },
    ]"
  />
  <Grid
    :products="[
      {
        id: 1,
        codepoint: '1F604',
        name: 'Grinning face with smiling eyes',
        href: '#',
        imageSrc:
          'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f604.svg',
        imageAlt: 'Grinning face with smiling eyes.',
      },
      {
        id: 2,
        codepoint: '1F604',
        name: 'Grinning face with smiling eyes',
        href: '#',
        imageSrc:
          'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f604.svg',
        imageAlt: 'Grinning face with smiling eyes.',
      },
      {
        id: 3,
        codepoint: '1F604',
        name: 'Grinning face with smiling eyes',
        href: '#',
        imageSrc:
          'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f604.svg',
        imageAlt: 'Grinning face with smiling eyes.',
      },
      {
        id: 4,
        codepoint: '1F604',
        name: 'Grinning face with smiling eyes',
        href: '#',
        imageSrc:
          'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f604.svg',
        imageAlt: 'Grinning face with smiling eyes.',
      },
      {
        id: 5,
        codepoint: '1F604',
        name: 'Grinning face with smiling eyes',
        href: '#',
        imageSrc:
          'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f604.svg',
        imageAlt: 'Grinning face with smiling eyes.',
      },
      {
        id: 6,
        codepoint: '1F604',
        name: 'Grinning face with smiling eyes',
        href: '#',
        imageSrc:
          'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f604.svg',
        imageAlt: 'Grinning face with smiling eyes.',
      },
      {
        id: 7,
        codepoint: '1F604',
        name: 'Grinning face with smiling eyes',
        href: '#',
        imageSrc:
          'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f604.svg',
        imageAlt: 'Grinning face with smiling eyes.',
      },
      {
        id: 8,
        codepoint: '1F604',
        name: 'Grinning face with smiling eyes',
        href: '#',
        imageSrc:
          'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f604.svg',
        imageAlt: 'Grinning face with smiling eyes.',
      },
      {
        id: 9,
        codepoint: '1F604',
        name: 'Grinning face with smiling eyes',
        href: '#',
        imageSrc:
          'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f604.svg',
        imageAlt: 'Grinning face with smiling eyes.',
      },
      {
        id: 10,
        codepoint: '1F604',
        name: 'Grinning face with smiling eyes',
        href: '#',
        imageSrc:
          'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f604.svg',
        imageAlt: 'Grinning face with smiling eyes.',
      },
    ]"
  />
  <Modal />
</template>

<script>
import Menu from "./components/Navbar.vue";
import Grid from "./components/Grid.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Menu, Grid, Modal },
};
</script>