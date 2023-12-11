import { defineStore } from 'pinia'
import { menuList } from '~/constants'

export const useAppStore = defineStore('app', () => {
  const route = useRoute()
  const baseRoute = '/' + route.fullPath.split('/')[1]
  const currentMenu = ref(
    menuList.findIndex((menu) => menu.path === baseRoute) || 0
  )
  const getCurrentMenu = computed(() => currentMenu.value)

  const handleClickMenu = (index: number) => {
    currentMenu.value = index
  }
  return { currentMenu, getCurrentMenu, handleClickMenu }
})
