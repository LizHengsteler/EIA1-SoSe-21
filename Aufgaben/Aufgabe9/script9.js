var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", function () {
        var trash = document.getElementById("trash");
        var add = document.getElementById("add");
        var newContainer = document.getElementById("toDoContainer");
        var inputField = document.getElementById("textInput");
        var toDoList = document.querySelector(".toDoList");
        var aufgabenArray = [
            {
                text: "Essen gehen",
                checked: true
            }, {
                text: "Zimmer aufräumen",
                checked: false
            }
        ];
        inputField.addEventListener("keydown", function (event) {
            if (event.keyCode == 13) {
                aufgabenArray.push({
                    text: inputField.value,
                    checked: false
                });
            }
        });
        addToDo();
        function addToDo() {
            toDoList.innerText = "";
            for (var index = 0; index < aufgabenArray.length; index++) {
                var div = document.createElement("div");
                div.textContent = aufgabenArray[index].text;
                document.body.appendChild(div);
            }
        }
    });
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=script9.js.map