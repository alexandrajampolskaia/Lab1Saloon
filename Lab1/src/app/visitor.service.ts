import { Injectable } from '@angular/core';
import { Name } from './name';
import { Beverage } from './beverage';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {  

	bevList: Beverage[] = [
		{drink: "Whiskey"},
		{drink: "Scotch"},
		{drink: "Burbon"},
	] 

	getDrinksList(): Beverage[] {
		return this.bevList;
	}

	addNewDrink(drink) {
		let drinkObject: Beverage = { drink };
		this.bevList.push(drinkObject);	
	}

	getBeverageList(){
		localStorage.setItem('bevList', JSON.stringify(this.bevList))
		return JSON.parse(localStorage.getItem('bevList'))
	}

	setSelectedDrink(selectedChoise){
		localStorage.setItem('drink', JSON.stringify(selectedChoise))
	}

	getDrinkLS(){
		return JSON.parse(localStorage.getItem('drink'))
	}
	
constructor() { } 




}







