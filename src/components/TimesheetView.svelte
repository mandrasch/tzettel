<script lang="ts">
	import {
		timesheetNotes,
		timesheetResults,
		totalWorkMinutes,
		parseResultLines,
		parseTimesheet,
		isProcessing
	} from '$lib/timesheet';

	export let subtitle: string;
	export let step1Title: string;
	export let step1Text: string;
	export let step2Title: string;
	export let step2Text: string;
	export let textareaLabel: string;
	export let textareaPlaceholder: string;
	export let processingText: string;
	export let reportTitle: string;
	export let colProject: string;
	export let colNotes: string;
	export let colHours: string;
	export let totalLabel: string;
	export let debugTitle: string;
	export let debugDescription: string;

	$: $timesheetNotes, parseTimesheet($timesheetNotes);
</script>

<div class="max-w-6xl mx-auto p-6">
	<header class="mb-12 text-center">
		<h1 class="text-5xl font-extrabold tracking-tight text-gray-800 mb-3">
			t<sup class="text-orange-500 text-xl">ages</sup>zettel <span class="text-2xl">📝</span>
		</h1>
		<p class="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
			{subtitle}
		</p>
	</header>

	<!-- Steps -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
		<div class="bg-white shadow-sm border border-gray-100 rounded-xl p-5">
			<div class="flex items-start gap-3 mb-2">
				<span class="text-blue-600 text-xl">📝</span>
				<h3 class="text-lg font-semibold">{step1Title}</h3>
			</div>
			<p class="text-gray-600 text-sm">
				{step1Text}
			</p>
		</div>

		<div class="bg-white shadow-sm border border-gray-100 rounded-xl p-5">
			<div class="flex items-start gap-3 mb-2">
				<span class="text-green-600 text-xl">🕒</span>
				<h3 class="text-lg font-semibold">{step2Title}</h3>
			</div>
			<p class="text-gray-600 text-sm">
				{step2Text}
			</p>
		</div>
	</div>

	<!-- Input -->
	<form class="mb-10">
		<label for="timesheetNotes" class="block font-semibold mb-2 text-gray-700">
			{textareaLabel}
		</label>
		<textarea
			id="timesheetNotes"
			bind:value={$timesheetNotes}
			rows="6"
			class="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
			placeholder={textareaPlaceholder}
		/>
	</form>

	<!-- Processing animation -->
	{#if $isProcessing}
		<div class="flex items-center text-blue-600 gap-2 mb-6 animate-pulse">
			<svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke-width="4" />
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
				/>
			</svg>
			<span class="font-medium">{processingText}</span>
		</div>
	{/if}

	<!-- Report Table -->
	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-4">{reportTitle}</h2>
		<table class="table-auto w-full border-collapse text-sm">
			<thead>
				<tr class="bg-gray-100 text-left text-gray-700">
					<th class="p-2">#</th>
					<th class="p-2">{colProject}</th>
					<th class="p-2">{colNotes}</th>
					<th class="p-2">{colHours}</th>
				</tr>
			</thead>
			<tbody>
				{#each $timesheetResults as entry, index}
					<tr class="border-b hover:bg-gray-50">
						<td class="p-2">{index + 1}</td>
						<td class="p-2">{entry.project}</td>
						<td class="p-2">{entry.notesCombined}</td>
						<td class="p-2">{(entry.totalMinutes / 60).toFixed(2)}</td>
					</tr>
				{/each}
				<tr class="font-bold bg-gray-50">
					<td colspan="3" class="p-2 text-right">{totalLabel}</td>
					<td class="p-2">{($totalWorkMinutes / 60).toFixed(2)}</td>
				</tr>
			</tbody>
		</table>
	</section>

	<!-- Parsing Debug Output -->
	<section class="mb-12">
		<h4 class="text-lg font-semibold mb-2">{debugTitle}</h4>
		<p class="mb-3 text-sm text-gray-600">
			{debugDescription}
		</p>
		<div class="bg-gray-100 p-4 rounded text-sm space-y-1">
			{#each $parseResultLines as line}
				{#if line.raw}
					<p class="text-gray-500 italic">{line.raw}</p>
				{:else}
					<p>
						<span class="text-blue-600 font-semibold">{line.startHour}</span>:
						<span class="text-blue-600">{line.startMin}</span> -
						<span class="text-blue-600 font-semibold">{line.endHour}</span>:
						<span class="text-blue-600">{line.endMin}</span>
						{#if line.hashtag}
							<span class="ml-2 bg-cyan-200 text-black px-1 rounded">{line.hashtag}</span>
						{/if}
						{#if line.notes}
							<span class="ml-2 text-gray-700">{line.notes}</span>
						{/if}
					</p>
				{/if}
			{/each}
		</div>
	</section>
</div>
