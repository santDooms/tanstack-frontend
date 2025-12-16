import { create } from "zustand";

interface UIState {
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isLoading: false,
  showLoader: () => set({ isLoading: true }),
  hideLoader: () => set({ isLoading: false }),
}));
