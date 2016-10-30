import {Component} from '@angular/core'

@Component ({
	selector: 'click-me',
	template: `
				<button class="btn btn-success" (click) = "onClickMe()">Click Me</button>
				<p>{{text}}</p>
				<input (keyup)="onKey($event)">
				<p>{{values}}</p>
				<input #box (keyup)="0">
				<p>{{box.value}}</p>
				<input #box2 (keyup)="onKeyPress(box2.value)">
				<p>{{boxValue}}</p>
				<input #box3 (keyup.enter)="enterValue=box3.value" (blur)="enterValue=box3.value">
				<p>{{enterValue}}</p>
			  `
})

export class ClickMeComponent {
	text: string = "";
	values: any = "";
	boxValue: string = "";
	enterValue = "";

	onClickMe() {
		this.text = "Hello My Hero!!!"
	}

	onKey(event: any) {
		this.values += event.target.value + " | ";
		console.log(event);
		console.log(event.target);
	}

	onKeyPress(event: any) {
		this.boxValue += event + " | ";
	}
}