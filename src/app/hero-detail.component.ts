import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component({
	selector: 'hero-detail',
	template:`
        <div *ngIf="hero">
          <div>id:{{hero.id}}</div>
          <div>
            <label>name:</label>
            <input type="text" [(ngModel)]="hero.name" placeholder="hero name"/>
          </div>
          <div>single:{{hero.single}}</div>
        </div>
	`
})

export class HeroDetailComponent {
	@Input() hero: Hero;
}