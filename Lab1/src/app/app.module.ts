import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DialogueComponent } from './dialogue/dialogue.component';
import { VisitorService } from './visitor.service';
import { BeverageComponent } from './beverage/beverage.component';
import { TheusualComponent } from './theusual/theusual.component';
import { ForgetmeComponent } from './forgetme/forgetme.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogueComponent,
    BeverageComponent,
    TheusualComponent,
    ForgetmeComponent
  ],
  imports: [
	BrowserModule,
	FormsModule,
	
  ],
  providers: [VisitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
