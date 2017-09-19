import {Component} from "@angular/core";

@Component({
	template:`<div>
		<h1>Person Details</h1>
		<h2>Name : {{name}}</h2>
		<h2>Age : {{age}}</h2>
		<img [width]='size.w' [height]='size.h' [src]='logo' /><br/>
		<input (click)="changeImage()" type=button value='Change' />
		<input (mouseover)="doDance()" type=button value='Dance' />
	</div>`,
	selector:'cool-app'
})
export class PersonComponent {
	
	name:string = "Pintu";
	age:number = 25;
	logo:string = "images/person1.jpg";
	size:any = {w:200,h:150}; 	

	constructor(){
		console.log("Inside PersonComponent constructor!!!")
	}

	changeImage(){
		console.log("Image changed!!!!")
	}

	doDance(){
		console.log("Perosn dancing.......!!!!")
	}
	
}
