function loadingBar(percentage) {

    let percentageCount = '%'.repeat(percentage / 10);
    let dotsCount = '.'.repeat(10 - percentageCount.length);

    if (percentage === 100) {
        console.log('100% Complete!');
    } else if (percentage < 100) {
        console.log(`${percentage}% [${percentageCount}${dotsCount}]`);
        console.log('Still loading...');
    }
}
loadingBar(0)
