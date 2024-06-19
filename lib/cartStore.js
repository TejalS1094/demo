import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (item) =>
        set((state) => ({ cartItems: [...state.cartItems, item] })),
      removeFromCart: (itemId) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item._id !== itemId),
        })),
      updateCartItem: (updatedItem) =>
        set((state) => {
          const updatedCartItems = state.cartItems.map((item) =>
            item._id === updatedItem._id ? updatedItem : item
          );
          return { cartItems: updatedCartItems };
        }),
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "kpb-cart",
    }
  )
);

export default useCartStore;
