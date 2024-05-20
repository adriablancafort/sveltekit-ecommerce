import { writable } from 'svelte/store';

// Cart

export const cart = writable([]);

export function addToCart(product) {
    cart.update((items) => {
        return [...items, product];
    });
}

// Products

export const products = writable([]);

export async function loadProducts(fetch, page) {
  const response = await fetch(`https://fakestoreapi.com/products?page=${page}`);
  const newProducts = await response.json();
  products.update((products) => {
    return [...products, ...newProducts];
  });
}