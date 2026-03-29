let time = 5;
let status = document.querySelector(".status");
let video = document.getElementById("video");

video.pause();

let timer = setInterval(() => {
    status.innerText = "Starting in " + time + "...";
    time--;

    if (time < 0) {
        clearInterval(timer);
        status.innerText = "Streaming Now...";
        video.play();
    }
}, 1000);

video.addEventListener("click", () => {
    video.muted = false;
    document.getElementById("unmuteText").style.display = "none";
});

// Viewer count
let count = 1243;

setInterval(() => {
    let change = Math.floor(Math.random() * 20);
    count += change;

    document.getElementById("viewers").innerText =
        "👀 " + count.toLocaleString() + " watching now";
}, 3000);

// Send chat
function send() {
    let input = document.getElementById("input");
    let chat = document.getElementById("chatBox");

    if (input.value !== "") {
        let msg = document.createElement("p");
        msg.innerHTML = "<b>You:</b> " + input.value;
        chat.appendChild(msg);
        input.value = "";
    }
}


function simulateBuffering() {
    let bufferText = document.getElementById("buffer");
    let videoEl = document.getElementById("video");

    // random delay between 15–30 sec
    let randomTime = Math.floor(Math.random() * 15000) + 15000;

    setTimeout(() => {
        videoEl.pause();
        bufferText.style.display = "block";

        // random buffer duration (1–3 sec)
        let bufferDuration = Math.floor(Math.random() * 2000) + 1000;

        setTimeout(() => {
            videoEl.play();
            bufferText.style.display = "none";

            simulateBuffering(); // repeat again
        }, bufferDuration);

    }, randomTime);
}

// start simulation
simulateBuffering();