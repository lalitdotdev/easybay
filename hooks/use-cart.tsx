// Import necessary dependencies
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types";

// Define the interface for the CartStore
interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

// Create a custom hook called useCart
const useCart = create(
  // Use the persist middleware to persist cart state
  persist<CartStore>(
    // Define the store's initial state and actions
    (set, get) => ({
      items: [], // An array to store the products in the cart
      addItem: (data: Product) => {
        // Function to add an item to the cart
        const currentItems = get().items; // Get the current items in the cart
        const existingItem = currentItems.find(item => item.id === data.id); // Check if the item already exists in the cart

        if (existingItem) {
          // If the item already exists, show a toast message
          return toast("Item already in cart.");
        }

        // If the item is not in the cart, add it to the cart
        set({ items: [...get().items, data] });
        toast.success("Item added to cart."); // Show a success toast message
      },
      removeItem: (id: string) => {
        // Function to remove an item from the cart
        set({ items: [...get().items.filter(item => item.id !== id)] }); // Filter out the item with the specified ID
        toast.success("Item removed from cart.");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      // Configuration for persistence
      name: "cart-storage", // Name for the persisted store
      storage: createJSONStorage(() => localStorage), // Use localStorage for storage
    },
  ),
);

export default useCart;
