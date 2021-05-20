var neuesDiv = document.createElement("div");
document.body.appendChild(toDoForm);
toDoForm.textContent = "hallo";
var toDoForm = document.querySelector(".textInput");
toDoForm.addEventListener("change", function () {
    console.log(toDoForm.value);
});
toDoForm.addEventListener("keypress", function (event) {
    if (event.key == "Enter")
        var neuesDiv = document.createElement("div");
    document.body.appendChild(neuesDiv);
    console.log(neuesDiv);
});
//# sourceMappingURL=ausgelagert.js.map