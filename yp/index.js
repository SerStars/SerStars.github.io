(() => {
    // JavaScript
    function setFontSize() {
        // Get the window's inner width and height
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;

        // Calculate the smaller dimension (either width or height)
        var minDimension = Math.min(windowWidth, windowHeight);

        // Calculate the desired font size based on the smaller dimension
        var fontSize = minDimension * 0.023; // You can adjust the multiplier (0.02) to fit your design

        // Set the font size of the body element
        document.body.style.fontSize = fontSize + "px";
    }

    // Call the function when the window is resized
    window.addEventListener("resize", setFontSize);

    // Call the function initially to set the font size when the page loads
    setFontSize();
})()