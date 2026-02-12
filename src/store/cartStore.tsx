import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  decreaseItem: (id: string) => void;
  removeItem: (id: string) => void;      
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (newItem) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === newItem.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return {
            items: [...state.items, { ...newItem, quantity: 1 }],
          };
        }),

      decreaseItem: (id) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === id);
          if (!existing) return state;

          if (existing.quantity <= 1) {
            return {
              items: state.items.filter((i) => i.id !== id),
            };
          }

          return {
            items: state.items.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            ),
          };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      getTotal: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },

      getItemCount: () => {
        const { items } = get();
        return items.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    {
      name: 'vocal-studio-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);