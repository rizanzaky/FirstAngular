import { Component } from '@angular/core';
import { Hero } from './business_objects/heroes';

@Component({
  selector: 'my-app',
  template: `
  			<hero-form></hero-form>
			<h1>{{title}}</h1>
    		<h2>My favorite hero is: {{myHero}}</h2>
			<ul>
				<li *ngFor = "let hero of heroes">{{hero.name}}</li>
			</ul>
			<p *ngIf="heroes.length > 3">There are many heroes!</p>
			<input #box4 (keyup.enter)="addToList(box4.value)">
			<button (click)="addToList(box4.value);box4.value=''">Add</button>
			<input #box5 (keyup.enter)="addToList(box5.value);box5.value=''" (blur)="addToList(box5.value);box5.value=''">
			<br>
			<click-me>Loading...</click-me>
			`
})
export class AppComponent {
	title: string;
	myHero: string;
	heroes: Hero[];

	constructor() {
		this.title = 'Tour of Heroes';
		this.heroes = [
			new Hero(1, 'Windstorm'),
			new Hero(13, 'Bombasto'),
			new Hero(15, 'Magneta'),
			new Hero(20, 'Tornado')
		];
		this.myHero = this.heroes[0].name;
    }

	public addToList(newItem: any) {
		if (newItem != "")
			this.heroes.push(new Hero(1, newItem));
	}
}