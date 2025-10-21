<template>
  <header
    class="fixed top-0 left-0 right-0 z-20 transition-all duration-300 ease-in-out"
    :class="{ 'bg-white/95 backdrop-blur-md shadow-lg': isScrolled, 'bg-transparent': !isScrolled }"
  >
    <nav class="w-[90%] mx-auto">
      <div class="flex justify-between items-center py-4 w-full">
        <div class="flex items-center space-x-3">
          <img src="/images/icons/app_icon.png" alt="NAME App Icon" class="w-20 h-20 object-contain" />
          <div class="text-3xl font-bold text-primary">{{ AppName }}</div>

          <div class="hidden md:flex items-center space-x-8 ml-11 text-secondary text-2xl font-medium">
            <a href="#" :class="isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'" class="transition-colors duration-300">產品</a>
            <a href="#" :class="isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'" class="transition-colors duration-300">進階功能</a>
            <a href="#" :class="isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'" class="transition-colors duration-300">安全</a>
          </div>

        </div>


        <div class="flex items-center space-x-8">
          <custom-button
            text="語言"
            backgroundColor="transparent"
            :textColor="isScrolled ? 'rgba(55, 65, 81, 0.8)' : 'rgba(255, 255, 255, 0.8)'"
            :fontSize="24"
            class="transition-all duration-300"
          >
            <template #prefix>
              <svg class="w-8 h-8 transition-colors duration-300" :class="isScrolled ? 'text-gray-700' : 'text-white'" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
              </svg>
            </template>
          </custom-button>
          <custom-button text="下載" :width="144" :height="52" :backgroundColor="'#FF87B3'"
            textColor="#ffffff" :fontSize="24" :onClick="handleButtonClick" radius="99px" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import CustomButton from "./CustomButton.vue";
import { AppName } from "../store/constants";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
