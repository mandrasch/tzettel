<script lang="ts">
	import { base } from '$app/paths';
	let isOpen = false;
</script>

<header class="border-b border-gray-200 bg-white">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center py-4">
			<a href={`${base}/`} class="text-lg font-semibold text-gray-800 hover:opacity-80">tzettel</a>

			<!-- Desktop nav -->
			<nav class="hidden sm:flex gap-4 items-center text-sm text-gray-600">
				<a href="${base}/" rel="alternate" hreflang="de" class="hover:text-gray-800">Deutsch</a>
				<a href="${base}/en" rel="alternate" hreflang="en" class="hover:text-gray-800">English</a>
			</nav>

			<!-- Mobile hamburger -->
			<button
				class="sm:hidden text-gray-700"
				on:click={() => (isOpen = !isOpen)}
				aria-label="Toggle navigation"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>

		<!-- Mobile dropdown -->
		{#if isOpen}
			<nav class="sm:hidden pb-4 space-y-2 text-sm text-gray-700">
				<a href="${base}/" rel="alternate" hreflang="de" class="block">Deutsch</a>
				<a href="${base}/en" rel="alternate" hreflang="en" class="block">English</a>
			</nav>
		{/if}
	</div>
</header>
