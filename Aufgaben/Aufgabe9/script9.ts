namespace Aufgabe9 {
  window.addEventListener("load", function (): void {
    
    let inputField: HTMLInputElement = document.getElementById("textInput") as HTMLInputElement;
    let toDoList: HTMLElement = document.querySelector(".toDoList");
    let arrow: HTMLElement = document.querySelector(".fa-arrow-circle-right");

    interface ToDoItem {
      text: string;
      checked: boolean;
    }

    let aufgabenArray: ToDoItem[] = [];

    arrow.addEventListener("click", function (): void {
      aufgabenArray.push({
        text: inputField.value,
        checked: false
      });
      showToDo();
    });


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

    function showToDo(): void {
      toDoList.innerHTML = "";



      for (let index: number = 0; index < aufgabenArray.length; index++) {
        const toDoInput: ToDoItem = aufgabenArray[index];
        let div: HTMLDivElement = document.createElement ("div");
        div.textContent = aufgabenArray[index].text;
        toDoList.appendChild(div);
        let trash: HTMLElement = document.createElement("i");
        trash.className = "fas fa-trash-alt"; 
        let checkbox: HTMLInputElement = document.createElement("input");
        checkbox.className = "checkbox";
     
        
      }
    
    }
     
  });
 

}

