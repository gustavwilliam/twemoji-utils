<template>
  <footer class="text-gray-300 bg-gray-800 bottom-0">
    <div
      class="
        grid
        gap-8
        sm:grid-cols-4
        max-w-2xl
        mx-auto
        py-12
        px-4
        sm:px-6
        lg:max-w-7xl lg:px-8
      "
    >
      <div>
        <img
          class="h-8"
          src="@/assets/logo/logo-full-color-light.svg"
          alt="Twemoji Utils logotype"
        />
      </div>
      <div class="text-sm col-span-2">
        Thanks to the creators of
        <a
          href="https://twemoji.twitter.com"
          target="_blank"
          class="underline hover:text-gray-50"
          >Twemoji</a
        >
        for making this set of emojis
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          class="underline hover:text-gray-50"
          >free to use</a
        >. This site was made by
        <a
          href="https://github.com/gustavwilliam/"
          target="_blank"
          class="underline hover:text-gray-50"
          >Gustav Odinger</a
        >.
      </div>
      <div class="flex flex-col items-start sm:items-end max-w-screen-xl">
        <div class="flex items-center space-x-2">
          <a
            href="https://github.com/gustavwilliam"
            target="_blank"
            class="hover:text-gray-50 flex flex-row space-x-3"
          >
            <img
              class="w-6 h-6"
              aria-hidden="true"
              src="@/assets/social-icons/github.svg"
              alt="GitHub logo"
            />
            <span class="sr-only">GitHub</span>
          </a>
          <a
            href="https://twitter.com/gustavodinger"
            target="_blank"
            class="hover:text-gray-50 flex flex-row space-x-3"
          >
            <img
              class="w-6 h-6"
              aria-hidden="true"
              src="@/assets/social-icons/twitter.svg"
              alt="Twitter logo"
            />
            <span class="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>