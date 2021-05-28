var Aufgabe11;
(function (Aufgabe11) {
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    var counterDOMElement;
    var doneCounterDOMElement;
    var leftCounterDOMElement;
    var counter = 1;
    window.addEventListener("load", function () {
        //interface definieren  
        //Objekte im Array
        var toDoArray = [
            {
                todosText: "EIA Aufgabe 11 erledigen",
                todosChecked: true
            },
            {
                todosText: "Thai-Curry kochen",
                todosChecked: false
            },
            {
                todosText: "Pflanzen gießen",
                todosChecked: false
            }
        ];
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        doneCounterDOMElement = document.querySelector("#done");
        leftCounterDOMElement = document.querySelector("#left");
        addButtonDOMElement.addEventListener("click", addTodo);
        drawListToDOM();
        function drawListToDOM() {
            // alle todos erst einmal aus dem DOM löschen
            todosDOMElement.innerHTML = "";
            var _loop_1 = function (index) {
                //Neues DIV-Element erstellen 
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
        }
        function updateCounter() {
            counterDOMElement.innerHTML = toDoArray.length + " in total";
            var index = 0;
            if (toDoArray[index].todosChecked == false) {
                counter = counter + 1;
                document.querySelector("#done").innerHTML = counter.toString() + "done";
            }
        }
        function addTodo() {
            if (inputDOMElement.value != "") {
                toDoArray.unshift({
                    todosText: inputDOMElement.value,
                    todosChecked: false
                });
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
        var artyom = new Artyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
            }
        });
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                    console.log("Ready!");
                });
            }, 250);
        }
        startContinuousArtyom();
    });
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script11.js.map