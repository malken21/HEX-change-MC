let textbox = "";

function input() {

    textbox = document.getElementById("text").value;

    switch (textbox.slice(0, 1)) {

        case "§":
            if (textbox.length != 14) { textbox = "None"; break }
            textbox = toHEX(textbox);
            break;

        case "#":
            if (textbox.length != 4 && textbox.length != 7) { textbox = "None"; break }
            textbox = toMC(textbox);
            break;

        default:
            if (textbox.length != 0) { textbox = "None"; break }
            textbox = "result";
            break;
    }

    document.getElementById("result").innerHTML = textbox;
}

function copy() {
    if (textbox != "") {
        navigator.clipboard.writeText(textbox);
        alert(`copy ${textbox}`);
    }
}