import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [imagetools(), sveltekit()],
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib'),
			$routes: path.resolve('./src/routes')
		}
	}
};

export default config;
