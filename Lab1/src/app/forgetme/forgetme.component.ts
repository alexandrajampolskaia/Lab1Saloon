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

  constructor(private service: VisitorService) { }

  DeleteVisitor() {
	localStorage.clear()
	this.whoMessage = "Who were you again?"
  }

  welcomeFirst(){
	if(localStorage.getItem('name') === null) {
		this.submitted = false;
	} else
	this.submitted = true;
}

  ngOnInit(): void {
	this.welcomeFirst()
  }

}
