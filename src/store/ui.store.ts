import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UIState {
  isLoading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

export const useUIStore = create<UIState>()(
  devtools((set) => ({
    isLoading: false,
    showLoader: () => set({ isLoading: true }, false, "ui/showLoader"),
    hideLoader: () => set({ isLoading: false }, false, "ui/hideLoader"),
  }), { name: "UI Store", enabled: import.meta.env.DEV }),
);
