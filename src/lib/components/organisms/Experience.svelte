<script lang="ts">
	import ExperienceCard from '$lib/components/molecules/ExperienceCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import type { ExperienceEntry } from '$lib/utils/types';
	import Button from '../atoms/Button.svelte';

	export let yearsOfExperience: number;
	export let entries: ExperienceEntry[];
</script>

<ContentSection
	id="experience"
	title="Werk ervaring"
	description="Afgelopen {yearsOfExperience}+ jaar, heb ik aan een hoop toffe projecten gewerkt."
	align="right"
>
	<div slot="button">
		<Button color="secondary" href="/resume">Bekijk ervaringen</Button>
	</div>
	<div class="grid">
		{#each entries as entry}
			{#if entry.showInOverview}
				<ExperienceCard
					companySlug={entry.companySlug}
					company={entry.company}
					jobTitle={entry.jobTitle}
					timeframe={entry.timeframe}
					description={entry.description}
					tags={entry.tags}
				/>
			{/if}
		{/each}
	</div>
</ContentSection>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;

		@include for-phone-only {
			grid-template-columns: 1fr;
		}
	}
</style>
