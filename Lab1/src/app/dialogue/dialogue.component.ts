import { Component, OnInit } from '@angular/core';
import { Name } from '../name';
import { Beverage } from '../beverage';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

  constructor(private service: VisitorService) { }

model = new Name("",""); 
bev: Beverage; 
submitted = false;
submittedd = false;
submitteddd = false;
message: string = "Drinks list: "
selectedDrink: string = ""; 
theUsualBtn: string = "";
drinkWithText: string = "";
lsText: string = "";
selectedChoise: string = "";
welFirst: string = "";
newDrink: string = "";
showThanks = false;
showThankss = false;


toggle() {
	this.submittedd = !this.submittedd;
}
	
// onSubmit() {
// 	this.service.onSubmit()
// }

// getLS() {
// 	this.service.getLS()
// 	console.log(this.model)
// }

onSubmit() {
	this.submitted = true;
	localStorage.setItem("name", JSON.stringify(this.model))
}

hideNameInput(){
	if(localStorage.getItem('name') === null) {
		console.log("");
		} else
		this.submitteddd = true;
}
 
handleTheSelected(theSelectedDrink){ 
	this.selectedDrink = theSelectedDrink.drink;
	this.drinkWithText = "One " + this.selectedDrink + ", coming right up!"
	this.showThanks = true;
}

thanks(): void {
	window.location.reload();
}

handleTheSelected2(theSelectedDrink){
	this.selectedDrink = theSelectedDrink.drink;
	this.newDrink = "Your new drink " + this.selectedDrink + " is coming right up!"
	this.showThankss = true;
}

welcomeFirst(){
	if(localStorage.getItem('name') === null) {
		console.log(this.welFirst = "Howdy, stranger! Haven't seen your face around here before. What's your name?");
		} else
		console.log(this.welFirst = "");
}



//ADD NEW DRINK

bevList: Beverage[] = [];

addNewDrink(drink: string): void {
	this.service.addNewDrink(drink);
	this.bevList = this.service.getBeverageList();
}


ngOnInit(): void {
	this.welcomeFirst()
	this.bevList = this.service.getBeverageList();
	this.hideNameInput()
   } 

   
}
