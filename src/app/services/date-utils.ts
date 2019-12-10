import * as moment from 'moment';

function addDays(date, days) {
    return moment(date).add(days, 'day').toDate();
}

export function addMonths(date, months) {
    return moment(date).add(months, 'month').toDate();
}

function areEqualDates(date1, date2) {
    return date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear();
}

function areEqualMonth(date1, date2) {
    return date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear();
}

function getFirstDateMonth(date) {
    return moment(date).startOf('month').toDate();
}

// returns the first day of week (monday = 0, tuesday = 1, ...)
function getFirstDayMonth(date) {

    let fistDayInMonth = getFirstDateMonth(date);

    let firstDay = moment(fistDayInMonth).day();

    if (firstDay === 0) {
        firstDay = 7;
    }

    firstDay--;

    return firstDay;
}

function getCurrentMonthDaysCountOnFirstWeek(date) {

    let firstDay = getFirstDayMonth(date);

    var result = 7 - firstDay;

    return result;
}

function getFirstDayOnCalendar(date) {

    let previousMonthDaysCountOnFirstWeek = 7 - getCurrentMonthDaysCountOnFirstWeek(date);

    let firstDayInCurrentMonth = getFirstDateMonth(date);

    let daysToSubstract = previousMonthDaysCountOnFirstWeek;

    let fistDateInCalendar = addDays(firstDayInCurrentMonth, -daysToSubstract);

    return fistDateInCalendar;
}

export function getDaysForCalendar(currentDate, selectedMonth) {
    let day = getFirstDayOnCalendar(selectedMonth);

    let calendarDays = [];

    for (let i = 0; i < 42; i++) {

        calendarDays.push({
            dayText: day.getDate(),
            isCurrentDay: areEqualDates(day, currentDate),
            isSelectedMonth: areEqualMonth(day, selectedMonth),
        })
        day = addDays(day, 1);
    }

    return calendarDays;
}