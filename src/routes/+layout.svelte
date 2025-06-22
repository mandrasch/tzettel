<script>
	import { base } from '$app/paths';
	import '../styles/app.css';
	import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<title>tzettel - small helper for daily timesheets 📝</title>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<footer class="footer mt-auto py-3 bg-white">
	<div class="container text-center bg-white text-dark">
		<a href="/imprint-privacy" class="link-secondary">Imprint & Privacy</a> | Made with SvelteKit |
		Open Source code:
		<a href="https://github.com/mandrasch/tzettel" class="link-secondary">GitHub</a>
	</div>
</footer>

<style>
</style>
