import { loadProducts } from "$lib/store.js";

let page1Loaded = false;

export async function load({ fetch }) {
  if (!page1Loaded) {
    await loadProducts(fetch, 1);
    page1Loaded = true;
  }
  return {};
}