3. // Create a function that changes the background color of an element's text based on the response it receives. If the response is "failed," change the background color to red. If the response is "successful," change the background color to green.

function changeBackgroundColor(response) {
    // football text
    let footballElement = document.getElementById("footballText");

    // background color based on the response
    if (response === "failed") {
        footballElement.style.backgroundColor = "red";
    } else if (response === "successful") {
        footballElement.style.backgroundColor = "green";
    }
}

changeBackgroundColor("failed");

