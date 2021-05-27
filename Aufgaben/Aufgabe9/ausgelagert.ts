/*let circleIcon: HTMLElement = document.createElement ("i");
        let circle: Attr = document.createAttribute("class");
        circle.value = "far fa-circle";
        circleIcon.setAttributeNode(circle);
        listElement.appendChild(circleIcon);

        let checkIcon: HTMLElement = document.createElement ("i");
        let check: Attr = document.createAttribute("class");
        check.value = "far fa-check-circle hidden";
        checkIcon.setAttributeNode(check);
        listElement.appendChild(checkIcon);

        document.querySelector(".fa-circle").addEventListener("click", function (): void {
          document.querySelector(".fa-circle").classList.add("hidden");
          document.querySelector(".fa-check-circle").classList.remove("hidden");
        });

/*aufgabenArray = aufgabenArray.filter(function (value: ToDoItem): boolean {
            return value.text != aufgabenArray[index].text; 



/*let circleIcon: HTMLElement = document.createElement ("i");

let circle: Attr = document.createAttribute("class");

circle.value = "far fa-circle";
circleIcon.setAttributeNode(circle);
listElement.appendChild(circleIcon);

let checkIcon: HTMLElement = document.createElement("i");
let checkbox: Attr = document.createAttribute("class");

checkbox.value = "far fa-check-circle";
checkIcon.setAttributeNode(checkbox);
listElement.appendChild(checkIcon);
*/

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
