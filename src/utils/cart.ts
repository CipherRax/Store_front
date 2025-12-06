import { Product } from "@/data/products";

export interface CartItem extends Product {
  quantity: number;
}

const CART_STORAGE_KEY = "futurestore_cart";

export const getCart = (): CartItem[] => {
  try {
    const cart = localStorage.getItem(CART_STORAGE_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
};

export const saveCart = (cart: CartItem[]): void => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent("cartUpdated"));
};

export const addToCart = (product: Product): void => {
  const cart = getCart();
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
};

export const updateCartItemQuantity = (productId: string, quantity: number): void => {
  const cart = getCart();
  const item = cart.find((item) => item.id === productId);

  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = quantity;
      saveCart(cart);
    }
  }
};

export const removeFromCart = (productId: string): void => {
  const cart = getCart();
  const updatedCart = cart.filter((item) => item.id !== productId);
  saveCart(updatedCart);
};

export const clearCart = (): void => {
  saveCart([]);
};

export const getCartTotal = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const getCartItemCount = (cart: CartItem[]): number => {
  return cart.reduce((count, item) => count + item.quantity, 0);
};
