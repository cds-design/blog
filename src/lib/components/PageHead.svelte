<script lang="ts">
	export let title: string;
	export let description: string;
	export let cover_image: string;

	const siteTitle = 'CDS Blog';
	const formattedTitle = title ? `${title} | ${siteTitle}` : siteTitle;
</script>

<svelte:head>
	<title>{formattedTitle}</title>

	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	<meta property="og:image" content={cover_image}>
	<meta property="og:title" content={title}/>
	<meta property="og:description" content={description}/>
</svelte:head>
