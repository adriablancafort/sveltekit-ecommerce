import { writable } from 'svelte/store';

// Cart

export const cart = writable([]);

export function addToCart() {
    cart.update((items) => {
        return [...items, product];
    });
}