import type { Project } from '$lib/utils/types';
import { getSrcsetFromImport } from '$lib/utils/functions';
import PersonalWebsiteImage from '$lib/images/projects/personal-website.png?width=500&format=avif;webp;png&meta&imagetools';

export default [
	// {
	// 	name: 'Persoonlijke website',
	// 	description:
	// 		'De website die je nu ziet. Ontworpen om mooi, eenvoudig en licht te zijn.',
	// 	image: getSrcsetFromImport(PersonalWebsiteImage),
	// 	sourceCode: '#',
	// 	blogPostLink: '/2022-year-in-review',
	// 	tags: [{ label: 'Svelte' }, { label: 'SvelteKit' }]
	// }
] as Project[];
