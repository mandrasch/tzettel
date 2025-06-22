<script>
	import { base } from '$app/paths';
	import TimesheetView from '../../components/TimesheetView.svelte';
</script>

<svelte:head>
	<title>tzettel – Timesheet Helper</title>
	<meta
		name="description"
		content="A tiny helper for chaotic workdays: groups tasks by hashtags and calculates the total time per project – all locally in your browser."
	/>
	<link rel="alternate" hreflang="de" href="{base}/" />
</svelte:head>

<TimesheetView
	subtitle="A smart timesheet helper for chaotic workdays: Groups tasks by hashtags and automatically calculates total time per project – all locally in your browser."
	step1Title="1. Write tasks with time & hashtag"
	step1Text="Record your tasks in Notepad++, Obsidian, or any editor you like. One time range and one hashtag per project is enough. Tasks without a hashtag will be grouped under “General”."
	step2Title="2. Paste your notes here to see totals"
	step2Text="tzettel calculates the total time per task group for you. Everything is processed exclusively in your browser – no data is sent anywhere. You can then transfer the results to your official time-tracking tool."
	textareaLabel="Your time notes:"
	textareaPlaceholder="09:00 - 09:30 #ProjectX Description"
	processingText="Processing your input…"
	reportTitle="Your Report"
	colProject="Project"
	colNotes="Tasks"
	colHours="Hours"
	totalLabel="Total"
	debugTitle="Parsing Result"
	debugDescription="For verification: this is how your input is interpreted:"
/>
