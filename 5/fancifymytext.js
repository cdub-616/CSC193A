let isBigger = false;
let isUpper = false;

function bigger() {
    const textArea = document.getElementById("inputT");
    if (isBigger) {
        textArea.style.fontSize = "10pt";
    } else {
        textArea.style.fontSize = "24pt";
    }
    isBigger = !isBigger;
};

function fancy() {
    alert("Fancy Shmancy!");
    const textArea = document.getElementById("inputT");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
};

function boring() {
    alert("Boring!");
    const textArea = document.getElementById("inputT");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
};

function moo() {
    const textArea = document.getElementById("inputT");
    let text = textArea.value;
    text = text.replace(/\./g, ". -Moo");
    textArea.value = text;
    if (isUpper){
        textArea.value = textArea.value.toLowerCase();
    } else {
        textArea.value = textArea.value.toUpperCase();
    }
    isUpper = !isUpper;
}