import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Beverage } from '../beverage';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.css']
})
export class BeverageComponent implements OnInit {
@Input() message: string;
bev: Beverage; 
bevList=[];


  constructor(private service: VisitorService) { }

  getBeverageList(){
	  this.bevList = this.service.getBeverageList();
	  console.log(this.bevList + "hej");  
  }

  @Output() choosenDrink = new EventEmitter<Beverage>()
 
  
	userChoice(selectedChoise){	
		this.service.setSelectedDrink(selectedChoise)
		this.choosenDrink.emit(selectedChoise)
		console.log("Selected drink" + selectedChoise);
	}

	thanks(): void {
		window.location.reload();
	} 

	bevListt: Beverage[]=[];
	submitted = false;
	
	@Output() onSaveDrink = new EventEmitter<string>();
	
	//   constructor(private service: VisitorService) { }
	
	  //SKRIV IN BEV
	  
		inputValue: string = '';
	
		onKeyUp(event) {
			this.inputValue = event.target.value;
		}
	
		saveNewDrink() {
			this.onSaveDrink.emit(this.inputValue);
			this.submitted = true;
		}
  
  ngOnInit(): void {
	this.getBeverageList() 
  }

}
