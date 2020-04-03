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
	this.drinkWithText = "Awesome " + this.selectedDrink + " coming right up!"
}

handleTheSelected2(theSelectedDrink){
	this.selectedDrink = theSelectedDrink.drink;
	this.newDrink = this.selectedDrink + " is your new drink!"
}

welcomeFirst(){
	if(localStorage.getItem('name') === null) {
		console.log(this.welFirst = "I haven't seen your face around here before, what's your name?");
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
