<template>
  <section>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center lg:mb-8 sm:mb-0 mb-6">
        <h2 class="md:text-4xl lg:text-5xl sm:text-3xl text-3xl font-extrabold text-purple">
          為什麼選擇 {{ AppName }}？
        </h2>
      </div>

      <div class="w-full flex flex-col justify-start items-center overflow-visible relative">
        <OverlapLayout image="/images/why_choose/phone1.png" title="精準八字排盤系統" subtitle="準確採用傳統干支、五行、十神確保命盤分析精準無誤"
          image-position="right" layout-class="lg:top-5 md:top-10 sm:top-5"
          image-class="relative lg:left-10 md:left-10 sm:left-15 lg:top-10 md:top-10 sm:top-10 right-4"
          text-class="relative lg:left-10 md:left-5 sm:left-10">
          <template #subtitle>
            準確採用傳統干支、五行、十神
            <br></br>
            確保命盤分析精準無誤
          </template>
        </OverlapLayout>
        <OverlapLayout image="/images/why_choose/phone2.png" title="智能配對" subtitle="綜合命盤結構與MBTI，找出高契合對象融合命理與心理學"
          image-position="left" layout-class="lg:top-0 md:top-15"
          image-class="relative lg:right-40 md:right-20 sm:right-20"
          text-class="relative lg:left-30 md:left-30 lg:w-[62%] md:w-[70%] sm:w-[70%] sm:left-25">
          <template #subtitle>
            結合命盤結構與MBTI，找出高契合對象融合命理與心理學
          </template>
        </OverlapLayout>
        <OverlapLayout image="/images/why_choose/phone3.png" title="戀愛建議提醒" subtitle="" image-position="right"
          layout-class="lg:top-[-60px] md:top-10" image-class="relative lg:left-15 md:left-20 sm:left-25 left-18"
          text-class="relative lg:left-10 md:left-10 lg:top-[-20px] sm:left-10 top-[-25px]">
          <template #subtitle>
            知道你們在意什麼、避開什麼
            <br></br>
            例：火土衝、比肩過多
            <br v-if="!isMobile"></br>
            減少關係摩擦
          </template>
        </OverlapLayout>
        <OverlapLayout image="/images/why_choose/phone4.png" title="命格搜尋" subtitle="" image-position="left"
          layout-class="lg:top-[-140px] md:top-[-40px] top-[-20px]"
          image-class="relative lg:right-40 md:right-20 sm:right-20 sm:h-90"
          text-class="relative lg:left-35 md:left-20 sm:left-20 sm:w-[90%]">
          <template #feature>
            <div class="bg-[#FFB1BE] py-1.5 px-4 rounded-full text-white text-center lg:mb-4 w-fit font-bold text-xl lg:mx-0 md:mx-0 sm:mx-0 mx-auto mb-4">
              付費功能
            </div>
          </template>
          <template #subtitle>
            <div class="text-center lg:text-left md:text-left sm:text-left w-full">
              找想特定命格的伴侶嗎？
              <br></br>
              喜木火的人、財星格局、日主強旺對象...
              <br></br>
              設定你想要的五行條件，讓命運不再全靠運氣
            </div>

          </template>
        </OverlapLayout>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { AppName } from '../store/constants';
import OverlapLayout from './OverlapLayout.vue';
import { ref, onMounted, onUnmounted } from 'vue';
const isMobile = ref(false);

const handleResize = () => {
  // Update mobile status when window resizes
  isMobile.value = document.body.classList.contains("is-mobile");
};

onMounted(() => {
  isMobile.value = document.body.classList.contains("is-mobile");
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
