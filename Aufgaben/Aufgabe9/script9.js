var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", function () {
        var trash = document.getElementById("trash");
        var add = document.getElementById("add");
        var newContainer = document.getElementById("toDoContainer");
        var inputField = document.getElementById("textInput");
        add.addEventListener("click", function () {
            var newParapraph = document.createElement("p");
            newContainer.appendChild(newParapraph);
        });
        var aufgabenArray = [];
        document.querySelector("#add").addEventListener("click", function () {
            var todo = {
                text: document.getElementById("textInput").value,
                checked: false
            };
            aufgabenArray.push(todo);
            for (var index = 0; index < aufgabenArray.length; index++) {
                var toDoField = document.getElementById("empty");
                var toDoContainer = document.createElement("div");
                toDoContainer.textContent = aufgabenArray[index].text;
            }
            console.log(aufgabenArray);
        });
    });
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=script9.js.map