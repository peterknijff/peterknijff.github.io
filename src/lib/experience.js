const careerStart = new Date(2014, 8, 1);
export const yearsOfExperience = Math.abs(
	new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970
);

export const entries = [
	// {
	// 	id: 'freelancer',
	// 	title: 'Freelancer',
	// 	jobTitle: 'Front-End Web Developer',
	// 	timeframe: '2022 → Now',
	//   current: true,
	//   location: 'Remote',
	// 	description:
	// 		"As an independent contractor, I've been able to build new innovative projects from scratch putting my development, planning, design and teamwork skills to the test.",
	// 	tags: [
	// 		{
	// 			color: 'primary',
	// 			text: 'Vue'
	// 		},
	// 		{
	// 			color: 'primary',
	// 			text: 'React'
	// 		},
	// 		{
	// 			color: 'primary',
	// 			text: 'Svelte'
	// 		}
	// 	]
	// },
	{
		id: 'naturehouse',
		title: 'Nature House',
		jobTitle: 'Senior Front-End Developer',
		timeframe: '2022 → Now',
		current: true,
		location: 'Breda, Nederland',
		description:
			'Our mission is to connect people with nature. Nature.house is the number one marketplace for holiday houses situated in nature.',
		tags: [
			{
				color: 'primary',
				text: 'UX/UI'
			},
			{
				color: 'primary',
				text: 'Typescript'
			},
			{
				color: 'secondary',
				text: 'Custom Elements'
			},
			{
				color: 'secondary',
				text: 'PostCSS'
			}
		]
	},
];
