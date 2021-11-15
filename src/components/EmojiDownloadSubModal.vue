<template>
  <TransitionRoot as="template" :show="isOpen">
    <Dialog
      as="div"
      class="fixed z-20 inset-0 overflow-y-auto"
      @close="closeModal"
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
              dark:bg-gray-900
              rounded-xl
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:align-middle sm:max-w-sm sm:w-full
            "
          >
            <div
              class="bg-white dark:bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
            >
              <div class="sm:flex flex-col items-center">
                <div class="text-center">
                  <DialogTitle
                    as="h3"
                    class="
                      text-lg
                      leading-6
                      font-medium
                      text-gray-900
                      dark:text-gray-50
                    "
                  >
                    Choose size
                  </DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Select a resolution to begin the download.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                bg-gray-50
                dark:bg-gray-800
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
                  focus:outline-none focus:ring-2 focus:ring-offset-2
                  dark:ring-offset-gray-800
                  focus:ring-blue-twitter
                  sm:ml-3 sm:w-auto sm:text-sm
                "
                href="#/"
                @click="
                  downloadResource(
                    'https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/' +
                      codepoint.replace(/\s+/g, '-') +
                      '.png'
                  );
                  closeModal();
                "
              >
                72x72
              </a>
              <a
                class="
                  cursor-pointer
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  border border-transparent
                  shadow-sm
                  sm:ml-3
                  mt-3
                  px-4
                  py-2
                  bg-blue-twitter
                  text-base
                  font-medium
                  text-white
                  hover:bg-blue-twitter-dark
                  focus:outline-none focus:ring-2 focus:ring-offset-2
                  dark:ring-offset-gray-800
                  focus:ring-blue-twitter
                  sm:mt-0 sm:w-auto sm:text-sm
                "
                href="#/"
                @click="
                  // downloadResource(
                  //   'https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/' +
                  //     codepoint.replace(/\s+/g, '-') +
                  //     '.png'
                  // );
                  closeModal()
                "
              >
                256x256
              </a>
              <a
                class="
                  cursor-pointer
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  border border-transparent
                  shadow-sm
                  sm:ml-3
                  mt-3
                  px-4
                  py-2
                  bg-blue-twitter
                  text-base
                  font-medium
                  text-white
                  hover:bg-blue-twitter-dark
                  focus:outline-none focus:ring-2 focus:ring-offset-2
                  dark:ring-offset-gray-800
                  focus:ring-blue-twitter
                  sm:mt-0 sm:w-auto sm:text-sm
                "
                href="#/"
                @click="
                  // downloadResource(
                  //   'https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/' +
                  //     codepoint.replace(/\s+/g, '-') +
                  //     '.png'
                  // );
                  closeModal()
                "
              >
                512x512
              </a>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
// mt-3 sm:mt-0

import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import downloadResource from "./downloadResource.js";

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },

  setup() {
    const isOpen = ref(false);
    const codepoint = ref("");

    return {
      isOpen,
      codepoint,
      closeModal() {
        isOpen.value = false;
      },
      openModal(code) {
        isOpen.value = true;
        this.codepoint = code;
      },
    };
  },

  methods: {
    downloadResource,
  },
};
</script>
