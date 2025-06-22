<script>
	import { base } from '$app/paths';

	import TimesheetView from '../components/TimesheetView.svelte';
</script>

<svelte:head>
	<title>tzettel – Zeiterfassungshilfe</title>
	<meta
		name="description"
		content="Kleiner Helfer für chaotische Arbeitstage, welcher Aufgaben anhand von Hashtags gruppiert und die Gesamtzeit pro Projekt berechnet."
	/>
	<link rel="alternate" hreflang="en" href="{base}/en" />
</svelte:head>

<TimesheetView
	subtitle="Ein smarter Tageszettel für chaotische Arbeitstage: Gruppiert Aufgaben nach Hashtags und berechnet automatisch die Gesamtzeit pro Projekt – und das komplett lokal im Browser."
	step1Title="1. Aufgaben mit Uhrzeit & Hashtag notieren"
	step1Text="Erfasse deine Tätigkeiten z. B. in Notepad++, Obsidian oder deinem Lieblingstool: Notiere die Start-Uhrzeit, die End-Uhrzeit und den Hashtag je Aufgbe/Projekte. Einträge ohne Hashtag werden unter &quot;General&quot; gesammelt."
	step2Title="2. Notizen hier einfügen, Zeitauswertung erhalten"
	step2Text="tzettel ermittelt die Gesamtzeit pro Aufgabe für dich. Die Verarbeitung erfolgt ausschließlich im Browser. Es werden keine Daten übertragen. Die Ergebnisse kannst du anschließend in dein Zeiterfassungstool übernehmen."
	textareaLabel="Deine Zeit-Notizen:"
	textareaPlaceholder="09:00 - 09:30 #ProjektX Beschreibung"
	processingText="Verarbeite deine Eingaben…"
	reportTitle="Dein Report"
	colProject="Projekt"
	colNotes="Aufgaben"
	colHours="Stunden"
	totalLabel="Gesamt"
	debugTitle="Parsing-Ergebnis"
	debugDescription="Zur Kontrolle: So interpretiert das System deine Eingaben:"
/>
