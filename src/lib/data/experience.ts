import type { ExperienceEntry } from "$lib/utils/types";

const careerStart = new Date(2014, 8, 22);
export const yearsOfExperience = Math.abs(
	new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970
);

export const entries = [
	{
		companySlug: 'natuurhuisje',
		company: 'Natuurhuisje',
		jobTitle: 'Senior front-end developer',
		timeframe: '2022 → Nu',
		location: 'Breda, Nederland',
		description:
			'Our mission is to connect people with nature. Nature House is the number one marketplace for holiday houses situated in nature.',
		showInOverview: true,
		tags: [
			{
				color: 'primary',
				label: 'Typescript'
			},
			{
				color: 'secondary',
				label: 'Design System'
			},
			{
				color: 'secondary',
				label: 'UX / UI'
			}
		]
	},
	{
		companySlug: 'natuurhuisje',
		company: 'Natuurhuisje',
		jobTitle: 'Medior front-end developer',
		timeframe: '2020 → 2022',
		location: 'Breda, Nederland',
		description:
			'Our mission is to connect people with nature. Nature House is the number one marketplace for holiday houses situated in nature.',
		showInOverview: false,
		tags: [
			{
				color: 'primary',
				label: 'Typescript'
			},
			{
				color: 'secondary',
				label: 'Design System'
			},
			{
				color: 'secondary',
				label: 'Twig'
			}
		]
	},
	{
		companySlug: 'zicht-online',
		company: 'Zicht online',
		jobTitle: 'Back-end / front-end developer',
		timeframe: '2017 → 2020',
		location: 'Rotterdam, Nederland',
		description: '',
		showInOverview: true,
		tags: [
			{
				color: 'primary',
				label: 'Typescript'
			},
			{
				color: 'secondary',
				label: 'VueJS / Nuxt'
			},
			{
				color: 'secondary',
				label: 'Twig & PHP'
			}
		]
	},
] as ExperienceEntry[];
