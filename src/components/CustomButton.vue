<template>
  <button
    :style="buttonStyles"
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot name="prefix" />
    <span v-if="text" :class="{ 'ml-2': hasPrefix, 'mr-2': hasSuffix }">{{ text }}</span>
    <slot name="suffix" />
  </button>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'

const slots = useSlots()

interface Props {
  text: string
  width?: string | number
  height?: string | number
  backgroundColor?: string
  textColor?: string
  fontSize?: string | number
  border?: string
  radius?: string | number
  gradientColors?: string[]
  disabled?: boolean
  onClick?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  text: 'Button',
  width: 'auto',
  height: 'auto',
  backgroundColor: '#3b82f6',
  textColor: '#ffffff',
  fontSize: '16px',
  radius: '20px',
  border: 'none',
  gradientColors: undefined,
  disabled: false,
  onClick: undefined
})

const buttonStyles = computed(() => {
  const styles: Record<string, string> = {}

  // 寬度
  if (props.width) {
    styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  }

  // 高度
  if (props.height) {
    styles.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  }

  // 圓角
  if (props.radius) {
    styles.borderRadius = typeof props.radius === 'number' ? `${props.radius}px` : props.radius
  }

  // 背景 - 漸層優先於單色
  if (props.gradientColors && props.gradientColors.length >= 2) {
    styles.background = `linear-gradient(135deg, ${props.gradientColors.join(', ')})`
  } else {
    styles.backgroundColor = props.backgroundColor
  }

  // 文字顏色
  styles.color = props.textColor

  // 文字大小
  styles.fontSize = typeof props.fontSize === 'number' ? `${props.fontSize}px` : props.fontSize

  // 邊框
  styles.border = props.border

  return styles
})

const buttonClasses = computed(() => {
  const classes = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'rounded-md',
    'transition-all',
    'duration-200',
    'cursor-pointer'
  ]

  if (!props.disabled) {
    classes.push('hover:opacity-80', 'hover:scale-105', 'active:scale-95')
  } else {
    classes.push('opacity-50', 'cursor-not-allowed')
  }

  return classes
})

const hasPrefix = computed(() => !!slots.prefix)
const hasSuffix = computed(() => !!slots.suffix)

const handleClick = () => {
  if (!props.disabled && props.onClick) {
    props.onClick()
  }
}
</script>