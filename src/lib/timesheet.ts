import { $state } from 'svelte';
import type { TimesheetEntry, ParsedLine } from './types';

// 1. Default example (could switch per language in another file)
export const defaultTimesheetNotes = `09:00 - 09:30 Tagesplanung und E-Mail-Check
09:30 - 10:00 Team-Standup
10:00 - 11:45 #ProjektA UI-Wireframe für Dashboard-Modul erstellen
11:45 - 12:15 #ProjektB Feedback durchgehen und Meeting vorbereiten
pause
13:00 - 14:30 #ProjektA Kundengespräch und Besprechungsnotizen
14:30 - 16:15 #ProjektC API-Integration mit internen Tools
16:15 - 17:00 #ProjektB Präsentationsfolien erstellen
17:00 - 17:30 Tagesabschluss und Aufgaben für morgen festlegen`;

// 2. Global shared reactive state
export const timesheetNotes = $state<string>(defaultTimesheetNotes);
export const timesheetResults = $state<{ results: TimesheetEntry[] }>({ results: [] });
export const totalWorkMinutes = $state<{ total: number }>({ total: 0 });
export const parseResultLines = $state<{ lines: ParsedLine[] }>({ lines: [] });
export const isProcessing = $state({ active: false });

// 3. Time formatting helpers
function pad(n: number): string {
	return n < 10 ? `0${n}` : `${n}`;
}

// 4. Main parsing logic
export function parseTimesheet(text: string) {
	isProcessing.active = true;

	const regex =
		/^([01]?\d|2[0-3]):([0-5]\d)\s*-\s*([01]?\d|2[0-3]):([0-5]\d)\s*([#][\w\-]+)?\s*(.*)?$/gm;

	const store: Record<string, { minutes: number; notes: string[] }> = {};
	const lines: ParsedLine[] = [];

	totalWorkMinutes.total = 0;

	for (const raw of text.split(/\r?\n/)) {
		const match = regex.exec(raw);
		regex.lastIndex = 0;

		if (match) {
			const [, sh, sm, eh, em, hashtagRaw, note] = match;
			const start = new Date();
			const end = new Date();
			start.setHours(+sh, +sm, 0);
			end.setHours(+eh, +em, 0);
			const minutes = (end.getTime() - start.getTime()) / 60000;

			const hashtag = hashtagRaw ?? '#General';
			if (!store[hashtag]) store[hashtag] = { minutes: 0, notes: [] };

			store[hashtag].minutes += minutes;
			if (note) store[hashtag].notes.push(note);

			lines.push({ startHour: sh, startMin: sm, endHour: eh, endMin: em, hashtag, notes: note });
		} else {
			lines.push({ raw });
		}
	}

	const results: TimesheetEntry[] = Object.entries(store).map(([project, data]) => ({
		project,
		notesCombined: data.notes.join(', '),
		totalMinutes: data.minutes
	}));

	timesheetResults.results = results;
	totalWorkMinutes.total = results.reduce((sum, r) => sum + r.totalMinutes, 0);
	parseResultLines.lines = lines;

	isProcessing.active = false;
}
