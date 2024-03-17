<script>
	import "../app.css";
	import Cart from "./cart.svelte";
	import { onNavigate } from '$app/navigation'

	onNavigate((navigation) => {
		if (!document.startViewTransition) return

		return new Promise((resolve) => {

			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
</script>

<div>
	<Cart />
  <slot />
</div>