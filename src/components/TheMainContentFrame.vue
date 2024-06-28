<template>
  <div class="w-full bg-blue-twitter">
    <div class="max-w-2xl mx-auto py-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <a class="text-white text-sm flex items-center gap-1 hover:text-gray-100"
        href="https://github.com/gustavwilliam/twemoji-utils" target="_blank">
        Check this project out on <img class="w-4 h-4 inline-block" aria-hidden="true"
          src="@/assets/social-icons/github.svg" alt="GitHub logo" /> GitHub!
      </a>
    </div>
  </div>
  <div class="max-w-2xl mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
    <slot />
  </div>
</template>

<script>
export default {};
</script>