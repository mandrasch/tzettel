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

<footer class="mt-auto py-4 bg-white">
	<div class="max-w-6xl mx-auto px-4 text-center text-gray-700 text-sm">
		<a
			href="{base}/imprint-privacy"
			class="text-gray-500 hover:text-gray-700 underline underline-offset-2"
		>
			Impressum & Datenschutz
		</a>
		<span class="mx-2">|</span>
		Made in Vienna with SvelteKit 🧡
		<span class="mx-2">|</span>
		Open Source Code:
		<a
			href="https://github.com/mandrasch/tzettel"
			class="text-gray-500 hover:text-gray-700 underline underline-offset-2"
		>
			GitHub
		</a>
	</div>
</footer>

<style>
</style>
