var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", function () {
        //Variablen deklarieren
        var inputField = document.getElementById("textInput");
        var toDoList = document.querySelector(".toDoList");
        var arrow = document.querySelector(".fa-arrow-circle-right");
        var zaehler = 0;
        var counter = document.querySelector(".taskCount");
        //Array erstellen
        var aufgabenArray = [];
        //Eventlistener für Pfeil
        arrow.addEventListener("click", function () {
            aufgabenArray.push({
                text: inputField.value,
                checked: true
            });
            showToDo();
            emtpyInput();
            zaehler = zaehler + 1;
            counter.innerHTML = zaehler.toString();
        });
        //Eventlistener Enter
        inputField.addEventListener("keydown", function (event) {
            if (event.key == "Enter") {
                event.preventDefault();
                aufgabenArray.push({
                    text: inputField.value,
                    checked: true
                });
                document.querySelector(".taskCount").innerHTML = zaehler.toString();
                showToDo();
                emtpyInput();
                zaehler = zaehler + 1;
                counter.innerHTML = zaehler.toString();
            }
        });
        //Funktion, die ToDos ausgibt
        function showToDo() {
            toDoList.innerHTML = "";
            var _loop_1 = function (index) {
                var arrayPosition = aufgabenArray[index];
                // Div erstellen
                var div = document.createElement("div");
                div.classList.add("toDoContainer");
                toDoList.appendChild(div);
                //Liste erstellen
                var listElement = document.createElement("li");
                listElement.classList.add("toDo");
                div.appendChild(listElement);
                listElement.textContent = aufgabenArray[index].text;
                //Icons
                var trashIcon = document.createElement("i");
                var trash = document.createAttribute("class");
                trash.value = "far fa-trash-alt";
                trashIcon.setAttributeNode(trash);
                listElement.appendChild(trashIcon);
                var checkIcon = document.createElement("input");
                checkIcon.type = "checkbox";
                var checked = document.createAttribute("class");
                checked.value = "checkBox";
                checkIcon.setAttributeNode(checked);
                listElement.appendChild(checkIcon);
                /*const checkBox: HTMLElement = document.createElement("i");
                listElement.appendChild(checkBox);
                checkBox.classList.add("far", "fa-circle");
        
                const checkedBox: HTMLElement = document.createElement("i");
                listElement.appendChild(checkedBox);
                checkedBox.classList.add("far", "fa-check-circle", "hidden");
        
                checkBox.addEventListener("click", function (): void {
        
                    checkBox.classList.add("hidden");
                    checkedBox.classList.remove("hidden");
        
                });
        
                checkedBox.addEventListener("click", function (): void {
        
                    checkedBox.classList.add("hidden");
                    checkBox.classList.remove("hidden");
        
                }); */
                //Löschen per Klick
                trashIcon.addEventListener("click", function () {
                    zaehler = zaehler - 1;
                    counter.innerHTML = zaehler.toString();
                    aufgabenArray = aufgabenArray.filter(function (elem) {
                        return elem != arrayPosition;
                    });
                    div.removeChild(listElement);
                    div.remove();
                });
            };
            for (var index = 0; index < aufgabenArray.length; index++) {
                _loop_1(index);
            }
        }
        //Funktion input leeren 
        function emtpyInput() {
            inputField.value = "";
        }
    });
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=script9.js.map