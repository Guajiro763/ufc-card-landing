const fightDate = new Date("October 18, 2028 19:42:00").getTime();
setInterval(function() {
    const currentTime = new Date().getTime();
    const distance = fightDate - currentTime;
    const distanceDate = new Date(distance);

    const years = distanceDate.getUTCFullYear() - 1970;
    const months = distanceDate.getUTCMonth();
    const totalDays = distanceDate.getUTCDate() - 1;
    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("weeks").innerText = weeks;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);