namespace Aufgabe9 {
  window.addEventListener("load", function (): void {
    //Variablen deklarieren
    let inputField: HTMLInputElement = document.getElementById("textInput") as HTMLInputElement;
    let toDoList: HTMLElement = document.querySelector(".toDoList");
    let arrow: HTMLElement = document.querySelector(".fa-arrow-circle-right");
    let zaehler: number = 0;
    let counter: HTMLElement = document.querySelector(".taskCount");
   
    
     
    //interface definieren  
    interface ToDoItem {
      text: string;
      checked: boolean; }

    //Array erstellen
    let aufgabenArray: ToDoItem[] = [];


    //Eventlistener für Pfeil
    arrow.addEventListener("click", function (): void {
      aufgabenArray.push({
        text: inputField.value,
        checked: true });

      showToDo();
      emtpyInput ();
      zaehler = zaehler + 1;
      counter.innerHTML = zaehler.toString(); });

    //Eventlistener Enter
    inputField.addEventListener("keydown", function (event: KeyboardEvent): void {
        if (event.key == "Enter") {
          event.preventDefault();
          aufgabenArray.push({
            text: inputField.value,
            checked: true });
          document.querySelector(".taskCount").innerHTML = zaehler.toString();
          showToDo();
          emtpyInput ();
          zaehler = zaehler + 1;
          counter.innerHTML = zaehler.toString();
        }});
    
    
      //Funktion, die ToDos ausgibt
    function showToDo(): void {
      toDoList.innerHTML = "";


      for (let index: number = 0; index < aufgabenArray.length; index++) {
       
          // Div erstellen
        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("toDoContainer");
        toDoList.appendChild(div);
     
        
        //Liste erstellen
        let listElement: HTMLLIElement = document.createElement ("li");
        listElement.classList.add("toDo");
        div.appendChild(listElement);
        listElement.textContent = aufgabenArray[index].text;
        
        
        //Icons
        let trashIcon: HTMLElement = document.createElement("i");
        let trash: Attr = document.createAttribute("class");
        trash.value = "far fa-trash-alt";
        trashIcon.setAttributeNode(trash);
        listElement.appendChild(trashIcon);

        let checkbox: HTMLInputElement = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkBox";
        listElement.appendChild(checkbox);

    
       
        //Löschen per Klick
        trashIcon.addEventListener("click", function (): void {
          zaehler = zaehler - 1;
          counter.innerHTML = zaehler.toString();
          aufgabenArray = aufgabenArray.filter(function (value: ToDoItem): boolean {
            return value.checked != aufgabenArray[index].checked; });

          div.removeChild(listElement);
          div.remove();
          
          
     
      });
    }
    }


      //Funktion input leeren 
    function emtpyInput (): void {
    inputField.value = ""; }

  }); }

