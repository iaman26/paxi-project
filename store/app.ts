import { defineStore } from 'pinia';

interface AppState {
  isLoading: boolean;
}

export const useAppStore = defineStore({
  id: 'app',

  state:(): any => ({
    item: []
  }),

  actions: {
   
  },
});
