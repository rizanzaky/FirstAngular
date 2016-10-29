import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
			<h1>{{title}}</h1>
    		<h2>My favorite hero is: {{myHero}}</h2>
			<ul>
				<li *ngFor = "let item of heroes">{{item}}</li>
			</ul>
			`
})
export class AppComponent {
	title: string;
	myHero: string;
	heroes: string[];

	public constructor() {
		this.title = 'Tour of Heroes';
		this.myHero = 'Windstorm';
		this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    }
}