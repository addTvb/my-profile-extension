function copyText(element) {
    let range, selection, worked;

    if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    try {
        document.execCommand("copy");
        updateStatus("Copied address", "info");
    } catch (err) {
        alert("Unable to copy the address");
    }
}

let button = document.querySelector("#button");

button.addEventListener("click", () => copyText(document.querySelector("#input")));
