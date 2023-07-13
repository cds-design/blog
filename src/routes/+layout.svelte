<script lang="ts">
	import { page } from '$app/stores';
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import "$lib/styles/global.css";
</script>

{#if !$page.url.href.includes("/posts/")}
	<Header/>
{/if}


<main>
	<slot />
</main>

<Footer/>


<style>
	main {
		/* display: grid; */
		/* grid-template-columns:repeat(3, 1fr); */
		display: flex;
		flex-direction: column;
		margin-inline: auto;
		max-width: 120ch;
		gap: 3rem;
	}
</style>