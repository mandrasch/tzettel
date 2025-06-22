export interface ParsedLine {
	raw?: string;
	startHour?: string;
	startMin?: string;
	endHour?: string;
	endMin?: string;
	hashtag?: string;
	notes?: string;
}

export interface TimesheetEntry {
	project: string;
	notesCombined: string;
	totalMinutes: number;
}
