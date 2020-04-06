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

	model = new Name("", "");
	bev: Beverage;
	welcomePhrase: Boolean = false;
	submittedBev: Boolean = false;
	submittedForm: Boolean = false;
	message: string = "Drinks list: "
	selectedDrink: string = "";
	theUsualBtn: string = "";
	drinkWithText: string = "";
	lsText: string = "";
	selectedChoise: string = "";
	welFirst: string = "";
	newDrink: string = "";
	showThanks: Boolean = false;
	showThankss: Boolean = false;

	showDrinkList() {
		this.submittedBev = !this.submittedBev;
	}
	submitForm() {
		this.welcomePhrase = true;
		localStorage.setItem("name", JSON.stringify(this.model))
	}
	hideNameInput() {
		if (localStorage.getItem('name') === null) {
			console.log("");
		} else
			this.submittedForm = true;
	}
	handleTheSelected(theSelectedDrink) {
		this.selectedDrink = theSelectedDrink.drink;
		this.drinkWithText = "One " + this.selectedDrink + ", coming right up!"
		this.showThanks = true;
	}
	thanks(): void {
		window.location.reload();
	}
	handleChange(theSelectedDrink) {
		this.selectedDrink = theSelectedDrink.drink;
		this.newDrink = "Your new drink " + this.selectedDrink + " is coming right up!"
		this.showThankss = true;
	}
	welcomeFirst() {
		if (localStorage.getItem('name') === null) {
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
