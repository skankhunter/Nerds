var modal = document.querySelector('.modal');
var btn = document.querySelector('.close-icon');
var button = document.querySelector(".us-btn");
var popup = document.querySelector(".write-us");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal");
    popup.classList.add("modal-show");
    dateIn.focus();
})

btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.add("modal");
})


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.add("modal");
        }
    }
});
