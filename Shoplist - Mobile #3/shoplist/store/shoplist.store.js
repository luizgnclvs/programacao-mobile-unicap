import { create } from "zustand";

const useItemStore = create((set) => ({
  items: [],
  addItem: (name) => set((state) => {
    const existingItem = state.items.find((item) => item.name === name);

    if (existingItem) return state;
    else {
      const newId = state.items.length + 1;

      return {
        items: [
          ...state.items,
          { id: newId, name: name, count: 0 },
        ],
      };
    }
  }),
  removeItem: (id) => set((state) => ({
    items: state.items.filter((item) => item.id !== id),
  })),
  increment: (id) =>  set((state) => ({
    items: state.items.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ),
  })),
  decrement: (id) => set((state) => ({
    items: state.items.map((item) =>
      item.id === id ? { ...item, count: Math.max(item.count - 1, 0) } : item
    ),
  })),
  reset: (id) => set((state) => ({
    items: state.items.map((item) =>
      item.id === id ? { ...item, count: 0 } : item
    ),
  })),
}));

export default useItemStore;
