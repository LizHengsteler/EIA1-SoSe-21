namespace Aufgabe11 {


//interface definieren  vor Eventlistener "load" 
    
interface ToDoItem {
todosText: string;
todosChecked: boolean; }
        
        
//Objekte im Array
let toDoArray: ToDoItem[] = [
    {
    todosText: "EIA Aufgabe 11 erledigen",
    todosChecked: true 
    } , {
    todosText: "Sport machen",
    todosChecked: false 
    } , {
    todosText: "Eis essen gehen",
    todosChecked: false }  ];




window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();

    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            toDoArray.unshift({
                todosText: wildcard,
                todosChecked: false });
    
            drawListToDOM();
            console.log("Aufgabe  " + wildcard + " wird hinzugefügt");
            artyom.say("Aufgabe" + wildcard + " wurde hinzugefügt.");
            
}
});
   
    
    function startContinuousArtyom(): void {
        
        
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                
                }).then(function(): void {
                    artyom.say("Sage erstelle Aufgabe");
    
                    console.log("Ready!");
                });
            
            }, 
            250);
    }
    

    document.querySelector("#microphone").addEventListener("click", function (): void {
        startContinuousArtyom();
        

    });
    

    var inputDOMElement: HTMLInputElement;
    var addButtonDOMElement: HTMLElement;
    var todosDOMElement: HTMLElement;
    var counterDOMElement: HTMLElement;
    var donecounterDOMElement: HTMLElement;
    var leftcounterDOMElement: HTMLElement;
    let inputField: HTMLInputElement;
    


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


     
     
    function drawListToDOM(): void {

         // alle todos erst einmal aus dem DOM löschen
         todosDOMElement.innerHTML = "";
     
         // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
         for (let index: number = 0; index < toDoArray.length; index++) {
     
             let todo: HTMLElement = document.createElement("div");
             todo.classList.add("todo");
     
             todo.innerHTML =  "<span class='check " + toDoArray[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                                 + toDoArray[index].todosText +
                                 "<span class='trash fas fa-trash-alt'></span>";
     
             // Zuweisen der Event-Listener für den Check- und den Trash-Button
             todo.querySelector(".check").addEventListener("click", function(): void {
                 
                 toggleCheckState(index);
             });
             todo.querySelector(".trash").addEventListener("click", function(): void {
                 
                 deleteTodo(index);
             });
     
            
             todosDOMElement.appendChild(todo);
         }
     
         updateCounter();
         doneTasks();
         openTasks();
         
     }
     //Zähler aller Aufgaben
    function updateCounter(): void {
        
         counterDOMElement.innerHTML = toDoArray.length + " tasks/s in total,";
       
     }
    // Zähler für erledigte Aufgaben
    function doneTasks(): void {
        let counterDone: number = 0;
        for (var index: number = 0; index < toDoArray.length; index++) {
            if (toDoArray[index].todosChecked == true)
            counterDone++;
        }
        donecounterDOMElement.innerHTML = counterDone + " done,";
    }

     // Zähler für offene Aufgaben
    function openTasks(): void {
        let counter: number = 0;
        for (var index: number = 0; index < toDoArray.length; index++) {
            if (toDoArray[index].todosChecked == false)
            counter++;
        }
        leftcounterDOMElement.innerHTML = counter + " left";
    }

   
    
     
    function addTodo(): void {
         
         if (inputDOMElement.value != "") {
             
    
              toDoArray.unshift({
                todosText: inputDOMElement.value,
                todosChecked: false });
             
             
             // Text aus dem Eingabefeld löschen
              inputDOMElement.value = "";
     
              drawListToDOM();
         }
     }
     
    function toggleCheckState(index: number): void {
     
          toDoArray[index].todosChecked = !toDoArray[index].todosChecked;
     
          drawListToDOM();
     }
     
    function deleteTodo(index: number): void {
         
          toDoArray.splice(index, 1);
        
          drawListToDOM();
     }
    });

}


