<template>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="open = false"
    >
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-4
          pb-20
          text-center
          sm:block sm:p-0
        "
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="
              inline-block
              align-bottom
              bg-white
              rounded-xl
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
            "
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex flex-col items-center">
                <div
                  class="
                    mx-auto
                    flex-shrink-0 flex
                    items-center
                    justify-center
                    h-24
                    w-24
                    sm:mx-0
                  "
                >
                  <img
                    :src="
                      'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/' +
                      codepoint +
                      '.svg'
                    "
                    @error="
                      $event.target.src = fallbackImage;
                      unavailable();
                    "
                    alt="Emoji"
                    class="w-full h-full"
                  />
                </div>
                <div class="mt-3 text-center">
                  <DialogTitle
                    as="h3"
                    class="text-lg leading-6 font-medium text-gray-900"
                  >
                    Download emoji
                  </DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Select your preferred format to begin the download.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                bg-gray-50
                px-4
                py-3
                sm:px-6 sm:flex sm:flex-row sm:justify-center
              "
            >
              <a
                class="
                  cursor-pointer
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  border border-transparent
                  shadow-sm
                  px-4
                  py-2
                  bg-blue-twitter
                  text-base
                  font-medium
                  text-white
                  hover:bg-blue-twitter-dark
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-blue-twitter
                  sm:ml-3 sm:w-auto sm:text-sm
                "
                :href="
                  'https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/' +
                  codepoint +
                  '.svg'
                "
                target="_blank"
                download
                @click="open = false"
              >
                SVG
              </a>
              <a
                class="
                  cursor-pointer
                  mt-3
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  border border-transparent
                  shadow-sm
                  px-4
                  py-2
                  bg-blue-twitter
                  text-base
                  font-medium
                  text-white
                  hover:bg-blue-twitter-dark
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-blue-twitter
                  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
                "
                :href="
                  'https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/' +
                  codepoint +
                  '.png'
                "
                target="_blank"
                download
                @click="open = false"
              >
                PNG
              </a>
              <button
                type="button"
                class="
                  mt-3
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  border border-gray-300
                  shadow-sm
                  px-4
                  py-2
                  bg-white
                  text-base
                  font-medium
                  text-gray-700
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-blue-twitter
                  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
                "
                @click="open = false"
                ref="cancelButtonRef"
              >
                Cancel
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  setup() {
    const open = ref(false);
    const codepoint = ref("");

    return {
      open,
      codepoint,
    };
  },
  data() {
    return {
      fallbackImage: require("../assets/unavailable.svg"),
    };
  },
};
</script>