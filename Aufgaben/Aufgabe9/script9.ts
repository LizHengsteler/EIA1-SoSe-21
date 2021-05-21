namespace Aufgabe9 {
    window.addEventListener("load", function(): void {

        let trash: HTMLElement = document.getElementById("trash");
        let add: HTMLElement = document.getElementById("add");
        let newContainer: HTMLElement = document.getElementById("toDoContainer");
        let inputField: HTMLInputElement = document.getElementById("textInput") as HTMLInputElement;
        let toDoList: HTMLElement = document.querySelector(".toDoList");

        interface ToDoItem {
            text: string;
            checked: boolean;
        }
        
        let aufgabenArray: ToDoItem [] = [
        {
            text: "Essen gehen",
            checked: true
    

        }, {
            text: "Zimmer aufräumen",
            checked: false
        }
        ];

        inputField.addEventListener("keydown", function(event: KeyboardEvent): void {
            if  (event.key == "Enter") {
                event.preventDefault ();
                aufgabenArray.push({
                    text: inputField.value,
                    checked: false
                });
                showToDo();
            }
           
        });

        

        function showToDo (): void {
            toDoList.innerHTML = "";

            for (let index: number = 0; index < aufgabenArray.length; index++) {
                let div: HTMLDivElement = document.createElement ("div");
                div.textContent = aufgabenArray[index].text;
                toDoList.appendChild(div);
                
                
            }
  

        }



    });
}
