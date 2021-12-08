# tzettel

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/mandrasch/tzettel)

`tzettel` is a tiny helper for people who work on multiple projects throughout the day. It combines the tasks and worktime for each project and generates a clean daily report.

Web-App: https://tzettel.mandrasch.eu/

Learning project protype built with

- SvelteKit [adapter-static](https://github.com/sveltejs/kit/tree/master/packages/adapter-static)
- Sass from [bootstrap v5](https://www.npmjs.com/package/bootstrap)
- [postcss/autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [sveltejs/svelte-preprocess](https://github.com/sveltejs/svelte-preprocess)
- [sass (formally: dart-sass)](https://www.npmjs.com/package/sass)
- [Github Pages Deploy Action (Pipeline)](https://github.com/JamesIves/github-pages-deploy-action)

## Todos

- [ ] Integrate bootstrap js for mobile nav toggle, etc.
- [ ] Add option for non-billable projects, e.g. `#!ProjectName`?
- [ ] Add diagrams
- [x] Bug: body styles are stripped out by vite?
  - https://github.com/bestguy/sveltestrap/issues/222#issuecomment-760111545
  - https://stackoverflow.com/questions/63299785/how-to-setup-global-bootstrap-via-scss-in-svelte
  - https://stackoverflow.com/a/68505906
- [ ] Import bootstrap in scss instead of <script>? https://github.com/Dax89/electron-sveltekit
- [ ] Use svelte-boostrap adder?! https://github.com/svelte-add/bootstrap
- [x] Highlight parsing result - not a good idea regards a11y? https://codersblock.com/blog/highlight-text-inside-a-textarea/
  - https://bitsofco.de/a-one-line-solution-to-highlighting-search-matches/
  - https://www.w3schools.com/tags/tag_mark.asp
  - https://www.the-art-of-web.com/javascript/search-highlight/
- [x] Compare lines in textarea with result? Show possible error?
- [ ] Add setting for start time of day or take it from report?
- [ ] Add setting to include automatic breaks after x time (with warning about health)
- [ ] Add local storage option?
- [ ] Add warning if user closes page?
- [ ] Add warning if time entries are overlapping?
- [ ] Integrate / experiment with multilanguage?

## Preview the build locally

- `npm run build`
- `npm run preview`
- navigate to `https://localhost:3000/tzettel`

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
