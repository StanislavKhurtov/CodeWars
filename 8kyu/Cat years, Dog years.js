const humanYearsCatYearsDogYears = (humanYears) => {
	let catYears, dogYears;
	if (humanYears === 1) {
		catYears = 15;
		dogYears = 15;
	} else if (humanYears === 2) {
		catYears = 15 + 9;
		dogYears = 15 + 9;
	} else {
		catYears = 15 + 9 + ((humanYears - 2) * 4);
		dogYears = 15 + 9 + ((humanYears - 2) * 5);
	}
	return [humanYears, catYears, dogYears];
}