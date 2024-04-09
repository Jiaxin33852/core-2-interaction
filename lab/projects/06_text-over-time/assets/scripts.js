function updateStyles() {
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();

    const fontSize = 20 + seconds; // basic size of 20, +1 per sec
    const hueValue = seconds * 6; // color from 0 to 360

    document.body.style.backgroundColor = `hsl(${hueValue}, 60%, 70%)`;
    document.getElementById('dynamic-title').style.fontSize = `${fontSize}px`;
}

setInterval(updateStyles, 1000); // update per sec