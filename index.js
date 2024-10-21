import "https://cdn.jsdelivr.net/npm/beercss@3.7.10/dist/cdn/beer.min.js";

const discord = document.getElementById("discord");

const updateDiscord = async () => {
	const res = await fetch(
		"https://corsproxy.io/?https%3A%2F%2Flanyard.cnrad.dev%2Fapi%2F861631850681729045%3Ftheme%3Ddark%26bg%3Dtransparant%26idleMessage%3D%7BTIME_REPLACE%7D",
	);
	const data = await res.text();
	discord.innerHTML = data.replace("{TIME_REPLACE}", `<span id="time"></span>`);
};

const lanyard = new WebSocket("wss://api.lanyard.rest/socket");

lanyard.onmessage = ({ data }) => {
	const { op, d } = JSON.parse(data);
	switch (op) {
		case 0: {
			updateDiscord();

			break;
		}
		case 1: {
			// Setup Heartbeat
			setInterval(() => {
				lanyard.send(JSON.stringify({ op: 3 }));
			}, d.heartbeat_interval);
			// Subscribe to user id 1273447359417942128
			lanyard.send(
				JSON.stringify({
					op: 2,
					d: {
						subscribe_to_id: "861631850681729045",
					},
				}),
			);
			break;
		}
		default: {
			break;
		}
	}
};

setInterval(() => {
	const currentTime = new Date()
		.toLocaleString("en-US", { timeZone: "Europe/Amsterdam" })
		.split(", ")[1]
		.split(":");
	const hours = Number.parseInt(currentTime[0]);

	const time = document.getElementById("time");

	if (time) {
		time.innerHTML = `${hours}:${currentTime[1]}:${currentTime[2]}`;
	}
});
