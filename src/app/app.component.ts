import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
	single: boolean;
}

const HEROES: Hero[] = [
	{id: 1, name: 'liuhui', single: true},
	{id: 2, name: 'zhangsan', single: true},
	{id: 3, name: 'lisi', single: false},
	{id: 4, name: 'wangwu', single: false},
	{id: 5, name: 'maliu', single: true},
	{id: 6, name: 'zhaoqi', single: false}
];

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{hero.name}}</h1>
  			<div>id:{{hero.id}}</div>
  			<div>
  				<label>name:</label>
  				<input type="text" [(ngModel)]="hero.name" placeholder="hero name"/>
  			</div>
  			<div>single:{{hero.single}}</div>
  			<h1>My heroes</h1>
  			<ul class="heroes">
  				<li *ngFor="let item of heroes">
  					<span class="badge">{{item.id}}</span> {{item.name}}
  				</li>
  			</ul>`,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
export class AppComponent  { 
	hero: Hero = {
		id: 1,
		name: 'liuhui',
		single: true
	};
	heroes = HEROES;
}
