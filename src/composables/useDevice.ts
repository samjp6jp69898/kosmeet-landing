import { ref, onMounted, onUnmounted } from 'vue'

export function useDevice() {
  const isMobile = ref(false)
  const isDesktop = ref(true)
  const breakpoint = 768 // md breakpoint in Tailwind CSS

  const updateDevice = () => {
    const width = window.innerWidth
    isMobile.value = width < breakpoint
    isDesktop.value = width >= breakpoint

    // Update CSS classes on document body
    document.body.classList.toggle('is-mobile', isMobile.value)
    document.body.classList.toggle('is-desktop', isDesktop.value)
  }

  onMounted(() => {
    updateDevice()
    window.addEventListener('resize', updateDevice)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateDevice)
  })

  return {
    isMobile,
    isDesktop
  }
}