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

var myImageElement = document.getElementById('discordstatus');
myImageElement.src = 'https://lanyard.cnrad.dev/api/861631850681729045?theme=dark&bg=7289da&idleMessage=Doing+Nothing&hideProfile=true' + Math.random();

setInterval(function() {
    var myImageElement = document.getElementById('discordstatus');
    myImageElement.src = 'https://lanyard.cnrad.dev/api/861631850681729045?theme=dark&bg=7289da&idleMessage=Doing+Nothing&hideProfile=true' + Math.random();
}, 500);