var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", function () {
        var neuesInput = document.createElement("input");
        document.body.appendChild(toDoForm);
        toDoForm.textContent = "hallo";
        var toDoForm = document.querySelector(".textInput");
        toDoForm.addEventListener("change", function () {
            console.log(toDoForm.value);
        });
        document.querySelector("#buttonPlay").addEventListener("click", function () {
            toDoForm.addEventListener("click", function () {
                if (event.key == "Enter")
                    var neuesDiv = document.createElement("div");
                document.body.appendChild(neuesDiv);
                console.log(neuesDiv);
            });
        });
    });
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=script9.js.map