import { create } from "zustand";

export const useSaveHref = create((set) => ({
  saveHref: (href) => {
    set({ href });
  },
  href: "",
}));
