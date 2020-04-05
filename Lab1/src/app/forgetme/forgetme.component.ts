import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../visitor.service';
import { Name } from '../name';
import { Beverage } from '../beverage';

@Component({
  selector: 'app-forgetme',
  templateUrl: './forgetme.component.html',
  styleUrls: ['./forgetme.component.css']
})
export class ForgetmeComponent implements OnInit { 

	bevList: Beverage[] = [];
	submitted = false;
	whoMessage: string = "";
	showWho = false;
	clicked = false;

  constructor(private service: VisitorService) { }

DeleteVisitor() {
	this.service.DeleteVisitor();
	this.whoMessage = "Got it. Who are you again?"
	this.showWho = true;
	this.clicked = true;
}

  who(){
	if(localStorage.getItem('name') === null) {
		this.submitted = false;
	} else
	this.submitted = true;
}

letMeTellYou(): void {
	window.location.reload();
}

  ngOnInit(): void {
	this.who()
  }

}
