import { onMounted, ref } from 'vue'

const THEME_CLASS = 'dark'
const STORAGE_DARK_MODE_KEY = 'darkMode'
const DEFAULT_DARK_MODE = true

export function useDarkMode() {
  const isDarkMode = ref<boolean>(DEFAULT_DARK_MODE)

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    document.documentElement.classList.toggle(THEME_CLASS, isDarkMode.value)
    localStorage.setItem(STORAGE_DARK_MODE_KEY, isDarkMode.value ? 'true' : 'false')
  }

  onMounted(() => {
    const savedMode = localStorage.getItem(STORAGE_DARK_MODE_KEY)

    if (savedMode !== null) {
      isDarkMode.value = savedMode === 'true'
    }

    document.documentElement.classList.toggle(THEME_CLASS, isDarkMode.value)
  })

  return { isDarkMode, toggleDarkMode }
}
