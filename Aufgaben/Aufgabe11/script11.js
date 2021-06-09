var Aufgabe11;
(function (Aufgabe11) {
    //interface definieren  vor Eventlistener "load" 
    //Objekte im Array
    var toDoArray = [
        {
            todosText: "EIA Aufgabe 11 erledigen",
            todosChecked: true
        }, {
            todosText: "Sport machen",
            todosChecked: false
        }, {
            todosText: "Eis essen gehen",
            todosChecked: false
        }
    ];
    window.addEventListener("load", function () {
        var artyom = new Artyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                toDoArray.unshift({
                    todosText: wildcard,
                    todosChecked: false
                });
                drawListToDOM();
                console.log("Aufgabe  " + wildcard + " wird hinzugefügt");
                artyom.say("Aufgabe" + wildcard + " wurde hinzugefügt.");
            }
        });
        function startContinuousArtyom() {
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                    artyom.say("Sage erstelle Aufgabe");
                    console.log("Ready!");
                });
            }, 250);
        }
        document.querySelector("#microphone").addEventListener("click", function () {
            startContinuousArtyom();
        });
        var inputDOMElement;
        var addButtonDOMElement;
        var todosDOMElement;
        var counterDOMElement;
        var donecounterDOMElement;
        var leftcounterDOMElement;
        var inputField;
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        donecounterDOMElement = document.querySelector("#done");
        leftcounterDOMElement = document.querySelector("#left");
        inputField = document.querySelector("#inputTodo");
        /*inputField.addEventListener("keydown", function (event: KeyboardEvent): void {
            if (event.key == "Enter") {
                event.preventDefault();
                drawListToDOM();
            }
            
        });*/
        addButtonDOMElement.addEventListener("click", addTodo);
        drawListToDOM();
        function drawListToDOM() {
            // alle todos erst einmal aus dem DOM löschen
            todosDOMElement.innerHTML = "";
            var _loop_1 = function (index) {
                var todo = document.createElement("div");
                todo.classList.add("todo");
                todo.innerHTML = "<span class='check " + toDoArray[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                    + toDoArray[index].todosText +
                    "<span class='trash fas fa-trash-alt'></span>";
                // Zuweisen der Event-Listener für den Check- und den Trash-Button
                todo.querySelector(".check").addEventListener("click", function () {
                    toggleCheckState(index);
                });
                todo.querySelector(".trash").addEventListener("click", function () {
                    deleteTodo(index);
                });
                todosDOMElement.appendChild(todo);
            };
            // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
            for (var index = 0; index < toDoArray.length; index++) {
                _loop_1(index);
            }
            updateCounter();
            doneTasks();
            openTasks();
        }
        //Zähler aller Aufgaben
        function updateCounter() {
            counterDOMElement.innerHTML = toDoArray.length + " tasks/s in total,";
        }
        // Zähler für erledigte Aufgaben
        function doneTasks() {
            var counterDone = 0;
            for (var index = 0; index < toDoArray.length; index++) {
                if (toDoArray[index].todosChecked == true)
                    counterDone++;
            }
            donecounterDOMElement.innerHTML = counterDone + " done,";
        }
        // Zähler für offene Aufgaben
        function openTasks() {
            var counter = 0;
            for (var index = 0; index < toDoArray.length; index++) {
                if (toDoArray[index].todosChecked == false)
                    counter++;
            }
            leftcounterDOMElement.innerHTML = counter + " left";
        }
        function addTodo() {
            if (inputDOMElement.value != "") {
                toDoArray.unshift({
                    todosText: inputDOMElement.value,
                    todosChecked: false
                });
                // Text aus dem Eingabefeld löschen
                inputDOMElement.value = "";
                drawListToDOM();
            }
        }
        function toggleCheckState(index) {
            toDoArray[index].todosChecked = !toDoArray[index].todosChecked;
            drawListToDOM();
        }
        function deleteTodo(index) {
            toDoArray.splice(index, 1);
            drawListToDOM();
        }
    });
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script11.js.map