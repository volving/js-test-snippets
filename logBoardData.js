let today = new Date();
let year = 1900 + today.getYear();
let baseDate = new Date(year, 0, 1);
let topDate = new Date(year + 1, 0, 1);

let days = [];
let weekIndex = -1;
let curWeek;
let curDate = new Date(baseDate);
let count = 0;
while (curDate < topDate) {
	let dayIndex = curDate.getDay();
	if (typeof curWeek === 'undefined' || dayIndex === 1) {
		++weekIndex
		curWeek = {};
		days[weekIndex] = curWeek;
	}
	curWeek[dayIndex] = {
		index: dayIndex,
		date: new Date(curDate)
	}
	curDate.setDate(curDate.getDate()+1);
	count++;
}

console.log(days);
console.log(count);