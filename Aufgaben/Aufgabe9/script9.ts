namespace Aufgabe9 {
  window.addEventListener("load", function (): void {
    //Variablen deklarieren
    let inputField: HTMLInputElement = document.getElementById("textInput") as HTMLInputElement;
    let toDoList: HTMLElement = document.querySelector(".toDoList");
    let arrow: HTMLElement = document.querySelector(".fa-arrow-circle-right");
    let toDoContainer: HTMLElement = document.querySelector(".toDoContainer");
     //interface definieren  
    interface ToDoItem {
      text: string;
      checked: boolean;
    }
    //Array erstellen
    let aufgabenArray: ToDoItem[] = [];


    //Eventlistener für Pfeil
    arrow.addEventListener("click", function (): void {
      aufgabenArray.push({
        text: inputField.value,
        checked: false
      });
      showToDo();
    });

    //Eventlistener Enter
    inputField.addEventListener(
      "keydown",
      function (event: KeyboardEvent): void {
        if (event.key == "Enter") {
          event.preventDefault();
          aufgabenArray.push({
            text: inputField.value,
            checked: false
            
          });
          
          showToDo();
        }
      }
    );
      //Funktion, die ToDos ausgibt
    function showToDo(): void {

      toDoList.innerHTML = "";
    

      for (let index: number = 0; index < aufgabenArray.length; index++) {
        const toDoInput: ToDoItem = aufgabenArray[index];
        
        let div: HTMLDivElement = document.createElement("div");
        div.className = "toDoContainer";
        toDoList.appendChild(div);
        let listElement: HTMLLIElement = document.createElement ("li");
        listElement.classList.add("toDo");
        toDoList.appendChild(listElement);
        listElement.textContent = aufgabenArray[index].text;
       
       
     
        
      }
    
    }
    let trash: HTMLElement = document.createElement("i");
    trash.className = "fas fa-trash-alt"; 
    let checkbox: HTMLInputElement = document.createElement("input");
    checkbox.className = "checkbox";
  });

 

}

