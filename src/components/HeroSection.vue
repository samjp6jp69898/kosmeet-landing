<template>
  <section class="relative w-screen flex min-h-[1000px] items-center desktop" style="
      background-image: url(&quot;/images/hero/hero_section_bg.png&quot;);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    ">
    <div class="w-full flex mt-[114px] mb-[164px] items-center justify-center pl-4 pr-2 md:pl-12 md:pr-8 lg:pl-28 lg:pr-20">
      <div class="flex flex-col items-start justify-center flex-grow text-left">
        <p class="text-6xl font-bold mb-6 text-white whitespace-normal leading-normal">
          讓緣分聽天命<br class="hidden sm:block xl:hidden"> 也靠科學
        </p>
        <p class="text-[28px] lg:mb-12 md:mb-8 mb-6 text-white">結合八字命理 給你最契合的靈魂伴侶</p>
        <div class="flex items-center lg:space-x-4 space-x-2 md:space-x-2">
          <custom-button text="立即加入" :width="{ md: 190, lg: 230 }" :height="{ default: 48, md: 56, lg: 60 }" :gradientColors="['#FF6AB4', '#FF7DB3', '#FFB1B1']"
            textColor="#ffffff" fontSize="24px" radius="99px" />
          <custom-button text="探索進階功能" :width="{ md: 190, lg: 230 }" :height="{ default: 48, md: 52, lg: 60 }" :backgroundColor="'transparent'"
            :border="'3px solid #FF87B3'" textColor="white" fontSize="24px"
            radius="99px" />
        </div>
        <p class="text-xl mt-3 text-gray-200 font-normal">支援 iOS / Android 系統</p>
      </div>
      <img src="/images/hero/phone.png" alt="App Preview" class="w-full max-w-[40%] md:max-w-[45%] lg:max-w-[50%] h-auto object-contain" />
    </div>
  </section>

  <section class="relative w-full flex items-center mobile" style="
      background-image: url(&quot;/images/hero/hero_section_bg.png&quot;);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    ">
    <div class="w-full flex flex-col mt-[140px] flex items-center justify-center px-6">
      <div class="flex flex-col items-center justify-center w-full">
        <p class="text-5xl font-bold mb-6 text-white">
          讓緣分聽天命
        </p>
        <p class="text-5xl font-bold mb-6 text-white">
          也靠科學
        </p>
        <p class="text-lg mb-12 text-white">結合八字命理 給你最契合的靈魂伴侶</p>
        <div class="flex items-center justify-center space-x-4 w-full">
          <custom-button text="立即加入" :width="{ default: 150, sm: 190 }" :height="{ default: 52, sm: 58 }" :gradientColors="['#FF6AB4', '#FF7DB3', '#FFB1B1']"
            textColor="#ffffff" :fontSize="{ default: 18, sm: 24 }" fontWeight="900" radius="99px" />
          <custom-button text="探索進階功能" :width="{ default: 150, sm: 190 }" :height="{ default: 52, sm: 58 }" :backgroundColor="'transparent'"
            :border="'3px solid #FF87B3'" textColor="white" :fontSize="{ default: 18, sm: 24 }"
            fontWeight="900" radius="99px"  />
        </div>
        <p class="text-xl mt-8 text-gray-200 font-normal">支援 iOS / Android 系統</p>
      </div>
      <img src="/images/hero/phone.png" alt="App Preview" class="min-w-[300px] mt-6 h-auto object-contain" />
    </div>
  </section>
</template>

<script setup lang="ts">
import CustomButton from "./CustomButton.vue";
</script>
