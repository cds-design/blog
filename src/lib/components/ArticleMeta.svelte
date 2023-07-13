<script lang="ts">
	import load from "cds-design"
	import type {Author} from "$lib/helpers"
	export let author: Author;
	export let date: string;

	const formattedDate = new Date(date).toDateString();

	load("avatar")
</script>

<p>
	<a href={author.href} class="author" title={author.tooltip}>
			<!-- <img src={author.pic} alt={author.name}> -->
			<cds-avatar src={author.pic} active></cds-avatar>
			<span class="author-name">
				{author.name}
			</span>
	</a>
	<span class="date">{formattedDate}</span>
</p>

<style>
  p {
	display: flex;
	justify-content: space-between;
	align-items: center;
  }

	.author {
		display: flex;
		align-items: center;
		gap: 0.5em;
	}
	img {
		height: 3em;
		border-radius: 50vmax;
	}

	.date {
		/* font-size: 0.8em; */
		opacity: 0.8;
	}
</style>
