<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Logo 區域 -->
        <div>
          <div class="text-2xl font-bold text-pink-400 mb-4">{{ AppName }}</div>
          <p class="text-gray-400 text-sm">讓緣分撞天命，科學配對真愛</p>
          <div class="flex space-x-4 mt-4">
            <div class="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div class="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div class="w-8 h-8 bg-gray-700 rounded-full"></div>
          </div>
        </div>

        <!-- 探索 -->
        <div>
          <h4 class="font-bold mb-4">探索</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="#" class="hover:text-white">首頁功能</a></li>
            <li><a href="#" class="hover:text-white">交友功能</a></li>
            <li><a href="#" class="hover:text-white">配對系統</a></li>
            <li><a href="#" class="hover:text-white">隱私設定</a></li>
          </ul>
        </div>

        <!-- 支援 -->
        <div>
          <h4 class="font-bold mb-4">支援</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="#" class="hover:text-white">客服中心</a></li>
            <li><a href="#" class="hover:text-white">常見問題</a></li>
            <li><a href="#" class="hover:text-white">安全須知</a></li>
            <li><a href="#" class="hover:text-white">問題回報</a></li>
          </ul>
        </div>

        <!-- 法律聲明 -->
        <div>
          <h4 class="font-bold mb-4">法律聲明</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="#" class="hover:text-white">隱私政策</a></li>
            <li><a href="#" class="hover:text-white">服務條款</a></li>
            <li><a href="#" class="hover:text-white">Cookie政策</a></li>
            <li><a href="#" class="hover:text-white">社群守則</a></li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400"
      >
        <p>&copy; 2024 NAME. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { AppName } from '../store/constants';
</script>
