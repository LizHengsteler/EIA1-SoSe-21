
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