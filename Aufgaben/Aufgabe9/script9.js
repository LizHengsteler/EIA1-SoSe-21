var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", function () {
        var inputField = document.getElementById("textInput");
        var toDoList = document.querySelector(".toDoList");
        var arrow = document.querySelector(".fa-arrow-circle-right");
        var toDoContainer = document.querySelector(".toDoContainer");
        var aufgabenArray = [];
        arrow.addEventListener("click", function () {
            aufgabenArray.push({
                text: inputField.value,
                checked: false
            });
            showToDo();
        });
        inputField.addEventListener("keydown", function (event) {
            if (event.key == "Enter") {
                event.preventDefault();
                aufgabenArray.push({
                    text: inputField.value,
                    checked: false
                });
                showToDo();
            }
        });
        function showToDo() {
            toDoList.innerHTML = "";
            for (var index = 0; index < aufgabenArray.length; index++) {
                var toDoInput = aufgabenArray[index];
                var div = document.createElement("div");
                div.className = "toDoContainer";
                toDoList.appendChild(div);
                var listElement = document.createElement("li");
                listElement.classList.add("toDo");
                toDoList.appendChild(listElement);
                listElement.textContent = aufgabenArray[index].text;
                var trash = document.createElement("i");
                trash.className = "fas fa-trash-alt";
                var checkbox = document.createElement("input");
                checkbox.className = "checkbox";
            }
        }
    });
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=script9.js.map