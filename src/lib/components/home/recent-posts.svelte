<script>
	import TwoByTwoGrid from '$lib/components/layout/2x2-grid.svelte';
	import Section from '$lib/components/layout/section.svelte';
	import Blobs from '$lib/components/layout/blobs.svelte';
	import BlogPostCard from '$lib/components/base/blog-post-card.svelte';

	export let posts = [];
</script>

<section id="recent-posts">
	<Section
		title="Laatste posts"
		description="Soms, schrijf ik over zaken die voor mij interessant zijn."
		buttonText="Bekijk posts"
		buttonUrl="/blog"
	>
		<TwoByTwoGrid>
			{#each posts as post}
				<BlogPostCard {post} showImage={false} />
			{/each}
		</TwoByTwoGrid>
	</Section>
	<Blobs maxLeft={20} maxTop={5} />
</section>
