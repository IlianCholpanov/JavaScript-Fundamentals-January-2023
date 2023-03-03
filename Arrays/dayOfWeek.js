function dayOfWeek(dayNumber) {
    let day = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ]
    if (dayNumber <= 7) {
        console.log(day[dayNumber - 1]);
    } else {
        console.log(`Invalid day!`);
    }
}
dayOfWeek([11])