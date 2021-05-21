var toDoDiv = document.createElement("div");
toDoDiv.classList.add("toDo");
var newToDo = document.createElement("li");
newToDo.innerText = "hello";
newToDo.classList.add("toDoItem");
toDoDiv.appendChild(newToDo);
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
var aufgabenArray = [
    {
        checked: true,
        text: "Hello"
    }, {
        checked: true,
        text: "Eia"
    }
];
document.querySelector(".next").addEventListener("click", function () {
    for (var index = 0; index < aufgabenArray.length; index++) {
        var div = document.createElement("div");
        var inputValue = document.getElementsByClassName("textInput").value;
        div.textContent = aufgabenArray[0].text;
    }
});
var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", function () {
        var aufgabenArray = [
            {
                checked: true,
                text: "Hello"
            }, {
                checked: true,
                text: "Eia"
            }
        ];
        document.querySelector(".next").addEventListener("click", function () {
            for (var index = 0; index < aufgabenArray.length; index++) {
                var div = document.createElement("div");
                var inputValue = document.getElementsByClassName("textInput").value;
                div.textContent = aufgabenArray[0].text;
            }
        });
    });
})(Aufgabe8 || (Aufgabe8 = {}));
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
//# sourceMappingURL=ausgelagert.js.map