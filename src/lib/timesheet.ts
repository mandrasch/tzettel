import { writable } from 'svelte/store';

export const defaultTimesheetNotes = `09:00 - 09:30 Tagesplanung und E-Mail-Check
09:30 - 10:00 #Standup Team-Standup
10:00 - 11:45 #ProjektAlpha UI-Wireframe für Dashboard-Modul erstellen
11:45 - 12:15 #KundeFirmaA Feedback durchgehen und Meeting vorbereiten
pause
13:00 - 14:30 #KundeFirmaA Kundengespräch und Besprechungsnotizen
14:30 - 16:15 #ProjektBeta API-Integration mit internen Tools
16:15 - 17:00 #KundeFirmaA Präsentationsfolien für Q3 erstellen
17:00 - 17:30 Tagesabschluss und Aufgaben für morgen festlegen`;

/*export const defaultTimesheetNotes = `09:00 - 09:30 Morning planning and inbox review
09:30 - 10:00 Team stand-up meeting
10:00 - 11:45 #ProjectAlpha UI wireframe for dashboard module
11:45 - 12:15 #ClientCompanyA Feedback review and meeting preparation
break
13:00 - 14:30 #ClientCompanyA Client call and meeting notes
14:30 - 16:15 #ProjectBeta API integration with internal tools
16:15 - 17:00 #ClientCompanyA Prepare presentation slides for Q3
17:00 - 17:30 Wrap-up and task list for tomorrow`;*/

export const timesheetNotes = writable(defaultTimesheetNotes);
export const parseResultLines = writable<any[]>([]);
export const timesheetResults = writable<any[]>([]);
export const totalWorkMinutes = writable(0);

function getMinutesWithLeadingZeros(dt: Date): string {
	return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}
function getHoursWithLeadingZeros(dt: Date): string {
	return (dt.getHours() < 10 ? '0' : '') + dt.getHours();
}

export function parseTimesheet(text: string) {
	const regExFindTimeSlotsAndHashtags =
		/^([01]?\d|2[0-3]):([0-5]\d)\s*-\s*([01]?\d|2[0-3]):([0-5]\d)\s*([#][\w\-]+)?\s*(.*)?$/gm;

	totalWorkMinutes.set(0);
	const timeSlotStore: Record<string, { minutesTotal: number; notesCombined: string }> = {};
	const resultLines: any[] = [];

	const linesRaw = text.split(/\n\r?/);

	for (const line of linesRaw) {
		const match = regExFindTimeSlotsAndHashtags.exec(line);
		regExFindTimeSlotsAndHashtags.lastIndex = 0;

		if (match) {
			const [_, sh, sm, eh, em, hashtagRaw, note] = match;
			const startHour = parseInt(sh);
			const startMin = parseInt(sm);
			const endHour = parseInt(eh);
			const endMin = parseInt(em);
			const hashtag = hashtagRaw ?? '#General';

			const startDate = new Date();
			startDate.setHours(startHour, startMin);
			const endDate = new Date();
			endDate.setHours(endHour, endMin);
			const diffMinutes = (endDate.getTime() - startDate.getTime()) / 60000;

			if (!timeSlotStore[hashtag]) {
				timeSlotStore[hashtag] = {
					minutesTotal: 0,
					notesCombined: ''
				};
			}
			timeSlotStore[hashtag].minutesTotal += diffMinutes;
			if (note) {
				timeSlotStore[hashtag].notesCombined +=
					(timeSlotStore[hashtag].notesCombined ? ', ' : '') + note;
			}

			resultLines.push({
				startHour: sh,
				startMin: sm,
				endHour: eh,
				endMin: em,
				hashtag,
				notes: note
			});
		} else {
			resultLines.push({ raw: line });
		}
	}

	parseResultLines.set(resultLines);

	const results = [];

	let totalMinutes = 0;
	for (const key in timeSlotStore) {
		const group = timeSlotStore[key];
		totalMinutes += group.minutesTotal;

		results.push({
			project: key,
			notesCombined: group.notesCombined,
			totalMinutes: group.minutesTotal
		});
	}
	totalWorkMinutes.set(totalMinutes);
	timesheetResults.set(results);
}
