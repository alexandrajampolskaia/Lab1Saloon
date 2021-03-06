import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Beverage } from '../beverage';
import { Name } from '../name';
import { VisitorService } from '../visitor.service';

@Component({
	selector: 'app-theusual',
	templateUrl: './theusual.component.html',
	styleUrls: ['./theusual.component.css']
})
export class TheusualComponent implements OnInit {
	bevList: Beverage;
	model = new Name("", "");
	lsName: string = "";
	lsDrink: string = "";
	tomText: string = "";
	welFirst: string = "";
	newDrink: string = "";
	beverageList = []
	submitted: Boolean = false;
	submittedd: Boolean = false;
	clicked: Boolean = false;
	showThanks: Boolean = false;

	@Input() message: string;

	constructor(private service: VisitorService) { }

	getNameLS() {
		this.model = JSON.parse(localStorage.getItem("name"))
		this.lsName = "Hello again, " + this.model.firstName + " " + this.model.lastName + "! The usual?"
		console.log(this.lsName);
	}

	getDrinkLS() {
		this.bevList = JSON.parse(localStorage.getItem("drink"))
		this.lsDrink = "The usual " + this.bevList.drink + " coming right up!"
		console.log(this.lsDrink);
		this.clicked = true;
		this.showThanks = true;
	}

	thanks(): void {
		window.location.reload();
	}

	welcomeFirst() {
		if (localStorage.getItem('name') === null) {
			console.log(this.welFirst = "");
		} else
			this.submittedd = true;
		console.log(this.welFirst = "The Usual!");
		console.log(this.newDrink = "New Drink!");
	}

	getBeverageList() {
		this.beverageList = this.service.getBeverageList();
		if (localStorage.getItem('drink') === null) {
		} else
			this.submittedd = true;
	}

	@Output() choosenDrink = new EventEmitter<Beverage>()

	userChoice(selectedChoise) {
		this.service.setSelectedDrink(selectedChoise)
		this.choosenDrink.emit(selectedChoise)
		console.log("Selected drink" + selectedChoise);
	}

	toggle() {
		this.submitted = !this.submitted;
		this.clicked = true;
	}

	ngOnInit(): void {
		this.getNameLS()
		this.welcomeFirst()
		this.getBeverageList()
	}

	bevListt: Beverage[] = [];

	@Output() onSaveDrink = new EventEmitter<string>();

	//SKRIV IN BEV

	inputValue: string = '';

	onKeyUp(event) {
		this.inputValue = event.target.value;
	}

	saveNewDrink() {
		this.onSaveDrink.emit(this.inputValue);
		this.submitted = true;
	}

}
