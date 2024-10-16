import { onMounted, ref } from 'vue'

const THEME_CLASS = 'dark'
const STORAGE_DARK_MODE_KEY = 'darkMode'

export function useDarkMode() {
  const isDarkMode = ref<boolean>(true)

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    document.documentElement.classList.toggle(THEME_CLASS, isDarkMode.value)
    localStorage.setItem(STORAGE_DARK_MODE_KEY, isDarkMode.value ? 'true' : 'false')
  }

  onMounted(() => {
    const savedMode = localStorage.getItem(STORAGE_DARK_MODE_KEY)
    if (savedMode === 'true') {
      isDarkMode.value = true
      document.documentElement.classList.add(THEME_CLASS)
    }
  })

  return { isDarkMode, toggleDarkMode }
}
