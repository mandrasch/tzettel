// use adapter-static for github pages rendering
// before: import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

import sveltePreprocess from 'svelte-preprocess';
// postcss autoprefixer, recommended for bootstrap sass handling (https://getbootstrap.com/docs/5.0/getting-started/download/#source-files)
import autoprefixer from 'autoprefixer';

// from https://github.com/sveltejs/kit/tree/master/packages/adapter-static#github-pages
const dev = process.env.NODE_ENV === 'development';

const pathsBase = process.env.PATHS_BASE === undefined ? '' : process.env.PATHS_BASE;
// github pages repo name, prefix for ghpages, because this will be hosted in subdirectory (e.g. '/tzettel')

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// add svelte-preprocess for scss handling
	preprocess: sveltePreprocess({
		sourceMap: dev,
		postcss: {
			plugins: [autoprefixer()]
		}
		/*
		// that didn't work because "Unused CSS selector "body"" was removed?
		scss: {
			// We can use a path relative to the root because
			// svelte-preprocess automatically adds it to `includePaths`
			// if none is defined.
			prependData: `@import 'src/styles/main.scss';`
		}*/
	}),
	kit: {
		adapter: adapter(),
		paths: {
			base: pathsBase
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
		// use target: document.body ? => document is not defined error?
	}
};

export default config;
