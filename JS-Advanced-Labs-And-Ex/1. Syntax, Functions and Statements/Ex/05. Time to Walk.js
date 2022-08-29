function walking(steps, footprintInMeters, speedInKmPerHour) {
    //500 meters the student rests and takes a 1-minute break.
    let totalTimeInSeconds = 0;
    let totalStepsInMeters = steps * footprintInMeters;
    let totalStepsInKm = totalStepsInMeters / 1000;

    for (let index = 0; index < totalStepsInMeters; index++) {
        if (index != 0 && index % 500 == 0) {
            totalTimeInSeconds += 60;
        }

    }
    totalTimeInSeconds += (totalStepsInKm / speedInKmPerHour) * 3600;
    let hours = Math.floor(totalTimeInSeconds / 3600);
    let minutes = Math.floor(totalTimeInSeconds / 60);
    let seconds = Math.round(totalTimeInSeconds % 60);

    console.log((hours < 10 ? "0" : "") + hours + ":"
        + (minutes < 10 ? "0" : "") + (minutes) + ":" + (seconds < 10 ? "0" : "") + seconds);

}