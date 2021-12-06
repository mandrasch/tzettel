<script>
	import { writable } from 'svelte/store';

	// helpers
	// https://www.w3resource.com/javascript-exercises/javascript-date-exercise-35.php
	function getMinutesWithLeadingZeros(dt) {
		return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
	}
	function getHoursWithLeadingZeros(dt) {
		return (dt.getHours() < 10 ? '0' : '') + dt.getHours();
	}

	// stores
	// TODO: put these in a single file (stores.js?)
	let defaultTimesheetNotes = `9:15 - 9:45 Getting organized
9:45 - 10:00 Stand-Up Meeting
10:00 - 12:00 #ClientTessa Website prototyping start page
Lunch Break (this line will just be ignored - feel free to take other notes as well)
12:00 - 12:30 #ClientMark CSS Bugfix for category pages
12:30 - 14:00 #ClientTessa Website prototyping details page`;

	// create store, input from user (from textarea)
	let timesheetNotes = writable(defaultTimesheetNotes);
	// the debugging store where we highlight the matches for debugging
	export const parseResultHTML = writable(''); // TODO: do we really need a store for this?

	// store for report results
	let timesheetResults = writable([
		/*
		{
			timeFrom: '9:00',
			timeUntil: '10:00',
			project: 'General',
			description: 'Prototyping'
		},
		{
			timeFrom: '10:00',
			timeUntil: '11:00',
			project: '#ClientMark',
			description: ''
		}
	*/
	]);
	let totalWorkMinutes = writable(0);

	// store binding
	// TODO: add delay, otherwise this is triggered very often?
	timesheetNotes.subscribe((newtimesheetNotesValue) => {
		console.log('Timesheet value changed', newtimesheetNotesValue);

		// the magic regex to rule them all :-D
		// fork of https://stackoverflow.com/a/49154648, thanks!
		// new: https://regex101.com/r/MbRRlW/2
		// \s* is one or multiple optional whitespaces (https://stackoverflow.com/a/14293041)
		const regExFindTimeSlotsAndHashtags =
			/^([01]?\d|2[0-3]):([0-5]\d)\s?-\s?([01]?\d|2[0-3]):([0-5]\d)[^\S\n]?([#][+a-zA-Z0-9]*)?[^\S\n]?([^\n\r]*)?$/gm;

		// start of work day, we add minutes to that
		var currentWorkDayDate = null;
		var originalWorkDayStartDate = null;
		totalWorkMinutes.update((val) => 0); // reset

		// TODO parse & generate results
		let timeSlotStore = {}; // TODO: use svelte store for this as well

		// hightligh all occurences for debug
		// // https://bitsofco.de/a-one-line-solution-to-highlighting-search-matches/
		let parseResultStringWithHighlights = newtimesheetNotesValue.replace(
			regExFindTimeSlotsAndHashtags,
			'<mark>$1</mark>:<mark>$2</mark>-<mark>$3</mark>:<mark>$4</mark> <mark class="hashtag" style="background-color:cyan;">$5</mark> <mark>$6</mark>'
		);
		// convert line breaks
		parseResultStringWithHighlights = parseResultStringWithHighlights.replace(/\n\r?/g, '<br>');
		// update the parsing result for debugging
		parseResultHTML.update((val) => parseResultStringWithHighlights);

		let m;
		while ((m = regExFindTimeSlotsAndHashtags.exec(newtimesheetNotesValue)) !== null) {
			// This is necessary to avoid infinite loops with zero-width matches
			if (m.index === regExFindTimeSlotsAndHashtags.lastIndex) {
				regExFindTimeSlotsAndHashtags.lastIndex++;
			}
			// The result can be accessed through the `m`-variable.

			// for debug:
			m.forEach((match, groupIndex) => {
				console.log(`Found match, group ${groupIndex}: ${match}`);
			});

			var startHour = m[1];
			var startMinutes = m[2];
			var endHour = m[3];
			var endMinutes = m[4];
			var hashtag = m[5];
			var currentNotes = m[6]; // can be empty as well, add to string

			// set start date for timesheet from first entry of notes
			if (currentWorkDayDate == null) {
				let today = new Date();
				currentWorkDayDate = new Date(
					today.getFullYear(),
					today.getMonth(),
					today.getDate(),
					startHour,
					startMinutes,
					0
				);

				originalWorkDayStartDate = currentWorkDayDate; // TODO: correct way of cloning?
			}

			var startDate = new Date();
			startDate.setHours(startHour, startMinutes);
			var endDate = new Date();
			endDate.setHours(endHour, endMinutes);

			var diffMinutes = (endDate - startDate) / (1000 * 60);
			console.log('calculated diff minutes', diffMinutes, m);

			console.log('Hashtag', hashtag);
			if (hashtag == undefined) {
				hashtag = '#General';
				console.log('set hashtag to default value', hashtag);
			}

			// create new object if not existent
			if ('' + hashtag + '' in timeSlotStore == false) {
				timeSlotStore[hashtag] = {
					minutesTotal: 0,
					notesCombined: ''
				};
			}
			console.log(timeSlotStore);
			// add data from this line to store:
			timeSlotStore[hashtag].minutesTotal = timeSlotStore[hashtag].minutesTotal + diffMinutes;
			if (currentNotes != undefined) {
				if (timeSlotStore[hashtag].notesCombined != '') {
					timeSlotStore[hashtag].notesCombined = timeSlotStore[hashtag].notesCombined + ', ';
				}
				timeSlotStore[hashtag].notesCombined = timeSlotStore[hashtag].notesCombined + currentNotes;
			}
		} // eo while

		// generate time report
		let resultEntries = [];
		for (var key in timeSlotStore) {
			console.log(key, timeSlotStore[key].minutesTotal, timeSlotStore[key].notesCombined);
			// calculate time from beginning of day
			let oldWorkDayDate = currentWorkDayDate;
			console.log(
				'current',
				currentWorkDayDate.getTime(),
				currentWorkDayDate.getHours(),
				currentWorkDayDate.getMinutes()
			);
			console.log('add', timeSlotStore[key].minutesTotal * 60000);
			currentWorkDayDate = new Date(
				currentWorkDayDate.getTime() + timeSlotStore[key].minutesTotal * 60000
			);

			// add minutes to global minutes
			totalWorkMinutes.update((val) => val + timeSlotStore[key].minutesTotal);

			// add entry

			// TODO: use https://momentjs.com/ to get hh:mm format instead of 8:0 with missing last zero?
			// or better wer?
			resultEntries.push({
				timeFrom:
					getHoursWithLeadingZeros(oldWorkDayDate) +
					':' +
					getMinutesWithLeadingZeros(oldWorkDayDate),
				timeUntil:
					getHoursWithLeadingZeros(currentWorkDayDate) +
					':' +
					getMinutesWithLeadingZeros(currentWorkDayDate),
				project: key,
				notesCombined: timeSlotStore[key].notesCombined,
				totalMinutes: timeSlotStore[key].minutesTotal
			});
		} // eo for

		// update store with all new entries
		timesheetResults.update((val) => resultEntries);

		// TODO implement: $('#totalWorkHours').html(totalWorkMinutes / 60);
	});
</script>

<div class="container py-5">
	<div class="row">
		<div class="col-12">
			<h1 class="py-2">tzettel 📝</h1>
			<div class="sub-title">
				<i>Tiny helper for chaotic workdays, which merges tasks for clean reports.</i>
			</div>
		</div>
	</div>
	<div class="row py-4">
		<div class="col-md-4">
			<b>Just paste your timesheet notes!</b><br />You can take them beforehand in Notepad++,
			TextEdit, Sublime, handwritten, what ever you like. ;)<br /><br />
			<!-- <a href="#">Load sample data</a> -->
		</div>
		<div class="col-md-4">
			<b>#ProTip 1: Hashtag grouping</b><br />
			Use a hashtag at the beginning to group entries, e.g. tasks related to a project. These entries
			will be later combined into one entry.
		</div>
		<div class="col-md-4">
			<b>#ProTip 2: General tasks </b><br />
			Entries without a hashtag in the beginning will be combined into the "General" entry.
		</div>
	</div>
	<!-- TODO: <button>Load sample data</button>-->
	<form>
		<div class="mb-3">
			<label for="timesheetNotes" class="form-label">Paste your notes:</label>
			<textarea
				class="form-control"
				id="timesheetNotes"
				bind:value={$timesheetNotes}
				rows="6"
				cols="75"
			/>
		</div>
		<!-- <button type="submit" class="btn btn-primary">Generate report</button> -->
	</form>

	<section class="py-4">
		<h2>Your report</h2>

		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Fictional time</th>
					<th scope="col">Project</th>
					<th scope="col">Tasks done ✅</th>
					<th scope="col">Hours</th>
				</tr>
			</thead>
			<tbody>
				{#each $timesheetResults as entry, index}
					<tr>
						<th scope="row">{index}</th>
						<td>{entry.timeFrom} - {entry.timeUntil}</td>
						<td>{entry.project}</td>
						<td>{entry.notesCombined}</td>
						<td>{Number.parseFloat(entry.totalMinutes / 60).toFixed(2)}</td>
					</tr>
				{/each}
				<tr>
					<th scope="row" />
					<td />
					<td />
					<td />
					<td><b>{Number.parseFloat($totalWorkMinutes / 60).toFixed(2)}</b></td>
				</tr>
			</tbody>
		</table>
	</section>

	<section>
		<h4>Parsing summary</h4>
		<p>This is only for debugging, here is what the algorithm detected in your notes:</p>
		<p>{@html $parseResultHTML}</p>
	</section>
</div>
