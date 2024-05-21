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
  const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10}`);
  const data = await response.json();
  const newProducts = data.products;
  products.update((products) => {
    return [...products, ...newProducts];
  });
}