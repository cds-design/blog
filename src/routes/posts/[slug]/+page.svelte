<script lang="ts">
	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';
	import "$lib/styles/post.css";

	import PageHead from '$lib/components/PageHead.svelte';
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';
	import ArticleImage from '$lib/components/ArticleImage.svelte';
	import Article from '$lib/components/Article.svelte';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />
<Article>
	<div class="head">
		<ArticleImage src={data.frontmatter.cover.replaceAll("./", "../")} />
		<ArticleTitle title={data.frontmatter.title} />
		<ArticleMeta author={data.author} date={data.frontmatter.date} />
	</div>
	<div class="content">
		<svelte:component this={component} />
	</div>
</Article>


<style>
	.head {
		margin-block-end: 5em;
	}

	.content :global(a:hover) {
		text-decoration: wavy underline;
	}
</style>