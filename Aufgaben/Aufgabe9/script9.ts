namespace Aufgabe9 {
    window.addEventListener("load", function(): void {

        let trash: HTMLElement = document.getElementById("trash");
        let add: HTMLElement = document.getElementById("add");
        let newContainer: HTMLElement = document.getElementById("toDoContainer");
        let inputField: HTMLElement = document.getElementById("textInput");
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
            if (event.keyCode == 13) {
                aufgabenArray.push({
                    text: inputField.value,
                    checked: false
                });
            }
           
        });

        addToDo();

        function addToDo (): void {
            toDoList.innerText = "";

            for (let index: number = 0; index < aufgabenArray.length; index++) {
                let div: HTMLDivElement = document.createElement ("div");
                div.textContent = aufgabenArray[index].text;
                document.body.appendChild(div);
                
                
            }


            

        }


    
 



    });
}
