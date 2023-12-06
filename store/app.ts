import { defineStore } from 'pinia'
import { menuList } from '~/constants'

export const useAppStore = defineStore('app', () => {
  const route = useRoute()
  const currentMenu = ref(
    menuList.findIndex((menu) => menu.path === route.path) || 0
  )
  const getCurrentMenu = computed(() => currentMenu.value)

  const handleClickMenu = (index: number) => {
    currentMenu.value = index
  }
  return { currentMenu, getCurrentMenu, handleClickMenu }
})
