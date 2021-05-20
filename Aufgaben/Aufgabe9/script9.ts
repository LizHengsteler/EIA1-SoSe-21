namespace Aufgabe8 {
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
                let inputValue = document.getElementsByClassName("textInput").value;

            
            }
        
       
        
       
       
            
        });
        
        
           
            
        



    });
}