namespace Aufgabe11 {


     var inputDOMElement: HTMLInputElement;
     var addButtonDOMElement: HTMLElement;
     var todosDOMElement: HTMLElement;
     var counterDOMElement: HTMLElement;
     var doneCounterDOMElement: HTMLElement;
     var leftCounterDOMElement: HTMLElement;
     var counter: number = 1;
     declare var Artyom: any;
     
  
     window.addEventListener("load", function(): void {
    
    //interface definieren  
    
     interface ToDoItem {
        todosText: string;
        todosChecked: boolean; }
    
    
    //Objekte im Array
     let toDoArray: ToDoItem[] = [
        {
            todosText: "EIA Aufgabe 11 erledigen",
            todosChecked: true 
        } , 
        {
                todosText: "Thai-Curry kochen",
                todosChecked: false 
        } , 
        {
                todosText: "Pflanzen gießen",
                todosChecked: false }  
     
     ];
    
     
     inputDOMElement = document.querySelector("#inputTodo");
     addButtonDOMElement = document.querySelector("#addButton");
     todosDOMElement = document.querySelector("#todos");
     counterDOMElement = document.querySelector("#counter");
     doneCounterDOMElement = document.querySelector("#done");
     leftCounterDOMElement = document.querySelector("#left");
     
   
     addButtonDOMElement.addEventListener("click", addTodo);
     
     
     drawListToDOM();
     
     
     function drawListToDOM(): void {
         // alle todos erst einmal aus dem DOM löschen
         todosDOMElement.innerHTML = "";
     
         // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
         for (let index: number = 0; index < toDoArray.length; index++) {
     
             
            //Neues DIV-Element erstellen 
            
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
     }
      
    


     function updateCounter(): void {
        
         counterDOMElement.innerHTML = toDoArray.length + " in total";
         let index: number = 0;
         if (toDoArray[index].todosChecked == false) {
            counter = counter + 1;
            document.querySelector("#done").innerHTML = counter.toString() + "done";
        }
         
         
        
     }
     
 
     function addTodo(): void {
       
         if (inputDOMElement.value != "") {
           
    
              toDoArray.unshift({
                todosText: inputDOMElement.value,
                todosChecked: false });
           
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
     const artyom: any = new Artyom();
    
     artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });
    
     function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
     startContinuousArtyom();
    });
    }