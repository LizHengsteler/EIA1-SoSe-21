window.addEventListener("load", function(): void {

    //Variablen
    const toDoList: HTMLUListElement = document.querySelector(".to-do-list");
    const addButton: HTMLElement = document.getElementById("add-Button");
    const toDoInput: HTMLInputElement = document.querySelector("#new-task");
    let zaehler: number = 0;
    let i: number;

    //interface
    interface ToDo {
        checked: boolean;
        text: string;
    }

    //Objekt
    let toDoArray: ToDo[] = [
      
    ];

    //Funktionen

    addButton.addEventListener("click", addToDo);
    toDoList.addEventListener("click", deleteCheck);


    function addToDo(event): void {

        event.preventDefault();

        const toDoDiv: HTMLDivElement = document.createElement("div");
        toDoDiv.classList.add("todo");

        const newToDo: HTMLElement = document.createElement("li");
        newToDo.innerText = toDoInput.value;
        newToDo.classList.add("ToDo-item");
        toDoDiv.appendChild(newToDo);

        //Checkmark Button
        const checkedButton: HTMLElement = document.createElement("button");
        // tslint:disable-next-line: quotemark
        checkedButton.innerHTML = '<i class="fas fa-check"></i>';
        checkedButton.classList.add("completedButton");
        toDoDiv.appendChild(checkedButton);

        //trash Button
        const trashButton: HTMLElement = document.createElement("button");
        // tslint:disable-next-line: quotemark
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("binButton");
        toDoDiv.appendChild(trashButton);

        toDoList.appendChild(toDoDiv);

        //clear input value
        toDoInput.value = "";


        //counter of the tasks
        zaehler++;
        counter();
    }



    //Buttons
    function deleteCheck(ele): void {

        const item = ele.target;

        if (item.classList[0] === "binButton") {
            const todo = item.parentElement;
            todo.remove();
            zaehler--;
            counter();
        }

        if (item.classList[0] === "completedButton") {
            const todo = item.parentElement;
            todo.remove();
            todo.classList.toggle("completed");
            zaehler--;
            counter();
        }

    }


    // Taskcounter
    function counter(): void {
        document.querySelector("#counter").innerHTML = zaehler + " tasks are left";
    }



});






/*namespace Ausgelagert {



    // Div erstellen
        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("toDoContainer");
        toDoList.appendChild(div);

        
    let toDoDiv: HTMLElement = document.createElement("div");
    toDoDiv.classList.add("toDo");

    let newToDo: HTMLElement = document.createElement("li");
    newToDo.innerText = "hello";
    newToDo.classList.add("toDoItem");
    toDoDiv.appendChild(newToDo);
 
 
 
 
 
    let neuesDiv: HTMLDivElement = document.createElement("div"); 
    document.body.appendChild(toDoForm);
    toDoForm.textContent = "hallo";
    let toDoForm: HTMLInputElement = 
 document.querySelector(".textInput") as HTMLInputElement;

    toDoForm.addEventListener("change", function (): void {
     console.log(toDoForm.value);
 });

    toDoForm.addEventListener("keypress", function(event: KeyboardEvent): void {
     if ((event as KeyboardEvent).key == "Enter")
     var neuesDiv: HTMLDivElement = document.createElement("div"); 
     document.body.appendChild(neuesDiv);
     console.log(neuesDiv);


     
 });


    interface ToDoItem {
    checked: boolean;
    text: string;

}


    let aufgabenArray: ToDoItem [] = [
    {
        checked: true,
        text: "Hello"
    }, {
        checked: true,
        text: "Eia"
    }
];
    document.querySelector(".next").addEventListener("click", function (): void {
    for (let index: number = 0; index < aufgabenArray.length; index++) {
        let div: HTMLDivElement = 
        document.createElement("div");
        let inputValue: HTMLElement = document.getElementsByClassName("textInput").value;
        div.textContent = aufgabenArray[0].text;
            

    
    }


    
});



    
    window.addEventListener("load", function(): void {
        
                interface ToDoItem {
            checked: boolean;
            text: string;
        
        }
        
        
                let aufgabenArray: ToDoItem [] = [
            {
                checked: true,
                text: "Hello"
            }, {
                checked: true,
                text: "Eia"
            }
        ];
                document.querySelector(".next").addEventListener("click", function (): void {
            for (let index: number = 0; index < aufgabenArray.length; index++) {
                let div: HTMLDivElement = 
                document.createElement("div");
                let inputValue: HTMLElement = document.getElementsByClassName("textInput").value;
                div.textContent = aufgabenArray[0].text;
                    
        
            
            }
        
        
            
        });
        
        
           
            
        



    });


    interface ToDoItem {
    text: string;
    checked: boolean;
}

    let aufgabenArray: ToDoItem [] = [];

    document.querySelector("#add").addEventListener("click", function (): void {
    let todo: ToDoItem = {
        text: (<HTMLInputElement>document.getElementById("textInput")).value,
        checked: false
    };

    aufgabenArray.push(todo);


    for (let index: number = 0; index < aufgabenArray.length; index++) {

        let toDoField: HTMLElement = document.getElementById("empty");
        let toDoContainer: HTMLElement = document.createElement("div");
        toDoContainer.textContent = aufgabenArray[index].text;
        



    
    }
    console.log(aufgabenArray);
}
*/
