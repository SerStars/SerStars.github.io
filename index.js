(() => {

    const time = document.getElementById("tijd")

    const timeFunc = () => {
        const currentTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Amsterdam" }).split(", ")[1].split(":");
        const hours = parseInt(currentTime[0]);

        time.innerHTML = `${hours}:${currentTime[1]}:${currentTime[2]}`;
    }


    setTimeout(() => {
        setInterval(timeFunc, 1000);
    }, 500);
})()
const time = document.getElementById("tijd")

setInterval(() => {
    const currentTime = new Date().toLocaleString("en-US", { timeZone: "Europe/Amsterdam" }).split(", ")[1].split(":");
    const hours = parseInt(currentTime[0]);

    time.innerHTML = `${hours}:${currentTime[1]}:${currentTime[2]}`;
})