<script lang="ts">
	import type { PageData } from './$types';

	import PageHead from '$lib/components/PageHead.svelte';
	import ArticleImage from '$lib/components/ArticleImage.svelte';
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';
	import ArticleDescription from '$lib/components/ArticleDescription.svelte';

	import { getPostURL, getAuthor, getCoverImageURL } from '$lib/helpers';

	export let data: PageData;
</script>

<PageHead title="Home" description="An awesome blog about development with Svelte" />

<div class="previews">
	{#each data.posts as { slug, title, author, description, date, cover }}
	<a class="preview" href={getPostURL(slug, title)}>
		<ArticleImage src={cover} />
		<div class="contents">
			<ArticleTitle {slug} {title} />
			{#await getAuthor(author) }
				<p>loading...</p>
			{:then author}
			<ArticleMeta {author} {date} />
			{:catch e}
				<span>{author}</span>
			{/await}
			<ArticleDescription {description} {slug} />
		</div>
	</a>
	{/each}
</div>
	
<slot />


<style>
	.previews {
		display: flex;
		flex-direction: column;
		gap: 2em;
		margin-block: 3em;
	}

	a {
		text-decoration: none;
	}

	.preview {
		padding: 1em;
		border-radius: 1em;
		display: grid;
		grid-template-columns: 0.5fr 1fr;
		gap: 1em;
		background: rgb(40 40 40 / 1);
	}

	.contents {
		display: grid;	
	}
</style>