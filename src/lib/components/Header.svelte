<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<a href="/">
		<h1 class:small={$page.url.pathname !== '/'}>Continuum Design System</h1>
	</a>
	<p>
	The Design System from the Future into your hands.
</p>
</header>


<style>
	header {
		padding: 1rem;
		border-bottom: 1px solid currentColor;
		text-align: center;
	}

	a {
		text-decoration: none;
	}

	h1 {
		font-size: 3rem;
		margin: 0;
	}
</style>