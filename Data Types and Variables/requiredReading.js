function reqReading(totalPages, pagesPerHour, daysToRead) {
    let totalTime = totalPages / pagesPerHour;
    let reqHoursPerDay = totalTime / daysToRead;

    console.log(reqHoursPerDay);
}
reqReading(432,
    15,
    4)