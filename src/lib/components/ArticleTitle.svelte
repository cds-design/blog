<script lang="ts">
	export let slug = '';
	export let title: string;

	const id = title
		.toLowerCase()
		.replace(/[^a-zA-Z ]/g, '')
		.replace(/\s/g, '-');

	const href = slug ? `./posts/${slug}` : '#' + id;
</script>

{#if slug}
	<h3 class="heading" class:large={!slug} {id}>
		<a {href}>
			{title}
		</a>
	</h3>
{:else}
	<h2 class="heading" class:large={!slug} {id}>
		<a {href}>
			{title}
		</a>
	</h2>
{/if}

<style>
	h2 {
		margin: 0;
	}

	.heading {
		margin: 0;
		font-size: 1.8rem;
	}

	.large {
		margin-top: 1em;
		font-size: 3rem;
	}

	a {
		text-decoration: none;
	}
</style>
