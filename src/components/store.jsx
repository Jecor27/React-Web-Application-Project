import { create } from "zustand";

const useStore = create((set) => ({
  characters: [],
  setCharacter: (characters) => set({ characters }),
  pageNumber: 1,
  setPageNumber: (pageNumber) => set({ pageNumber }),
}));

export default useStore;
