import { create } from 'zustand'

type Store = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const useStoreUi = create<Store>()((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}))

