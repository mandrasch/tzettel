<script lang="ts">
	import {
		timesheetNotes,
		timesheetResults,
		totalWorkMinutes,
		parseResultLines,
		parseTimesheet,
		isProcessing
	} from '$lib/timesheet';

	$: $timesheetNotes, parseTimesheet($timesheetNotes);
</script>

<svelte:head>
	<title>tzettel – Zeiterfassungshilfe</title>
	<meta
		name="description"
		content="Kleiner Helfer für chaotische Arbeitstage, welcher Aufgaben anhand von Hashtags gruppiert und die Gesamtzeit pro Projekt berechnet."
	/>
	<link rel="alternate" hreflang="en" href="/en" />
</svelte:head>

<div class="max-w-6xl mx-auto p-6">
	<header class="mb-8">
		<h1 class="text-4xl font-bold mb-2">t(ages)zettel 📝</h1>
		<p class="italic text-gray-600">
			Kleiner Helfer für chaotische Arbeitstage, welcher Aufgaben anhand von Hashtags gruppiert und
			die Gesamtzeit pro Projekt berechnet.
		</p>
	</header>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
		<div>
			<strong>1. Aufgaben notieren mit Uhrzeit & Hashtag</strong>
			<p>
				Erfasse deine Tätigkeiten z. B. in Notepad++, Obsidian oder deinem Lieblingstool – eine
				Uhrzeit und ein Hashtag pro Projekt reichen aus. Für allgemeine Tätigkeiten braucht es
				keinen Hashtag, diese werden unter "General zusammengefasst".
			</p>
		</div>
		<div>
			<strong>2. Notizen hier einfügen – alles bleibt lokal</strong>
			<p>
				Füge deine Einträge am Ende des Tages in das Textfeld ein. Es findet keine Datenübertragung
				statt – die Auswertung erfolgt ausschließlich in deinem Browser. Die berechneten
				Projektzeiten kannst du anschließend bequem in dein offizielles Zeiterfassungstool
				übertragen.
			</p>
		</div>
		<!-- <div>
			<strong>3. Gesamtzeit ins Zeiterfassungssystem übernehmen</strong>
			<p>
				Die berechneten Projektzeiten kannst du anschließend bequem in dein offizielles
				Zeiterfassungstool übertragen.
			</p>
		</div>-->
	</div>

	<form class="mb-8">
		<label for="timesheetNotes" class="block font-semibold mb-2">Deine Zeit-Notizen einfügen:</label
		>
		<textarea
			id="timesheetNotes"
			bind:value={$timesheetNotes}
			rows="6"
			class="w-full p-3 border border-gray-300 rounded-md shadow-sm"
		/>
	</form>

	{#if $isProcessing}
		<div class="text-blue-500 animate-pulse font-medium mb-4">🔄 Verarbeite deine Eingaben...</div>
	{/if}

	<section class="mb-12">
		<h2 class="text-2xl font-semibold mb-4">Dein Report</h2>
		<table class="table-auto w-full border-collapse">
			<thead>
				<tr class="bg-gray-100 text-left">
					<th class="p-2">#</th>
					<th class="p-2">Projekt</th>
					<th class="p-2">Aufgaben ✅</th>
					<th class="p-2">Stunden</th>
				</tr>
			</thead>
			<tbody>
				{#each $timesheetResults as entry, index}
					<tr class="border-b">
						<td class="p-2">{index + 1}</td>
						<td class="p-2">{entry.project}</td>
						<td class="p-2">{entry.notesCombined}</td>
						<td class="p-2">
							{#if parseFloat((entry.totalMinutes / 60).toFixed(2)) > 0}
								{(entry.totalMinutes / 60).toFixed(2)}
							{/if}
						</td>
					</tr>
				{/each}
				<tr class="font-bold">
					<td colspan="3" class="p-2 text-right">Gesamt</td>
					<td class="p-2">{($totalWorkMinutes / 60).toFixed(2)}</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section class="mb-12">
		<h4 class="text-lg font-semibold mb-2">Parsing-Ergebnis</h4>
		<p class="mb-2">Dies ist nur zur Kontrolle – so interpretiert das System deine Notizen:</p>
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
