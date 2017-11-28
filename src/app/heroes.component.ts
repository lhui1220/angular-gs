import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  template: `
  			<h2>My heroes</h2>
  			<ul class="heroes">
  				<li *ngFor="let hero of heroes" (click)="onSelect(hero)">
  					<span class="badge">{{hero.id}}</span> {{hero.name}}
  				</li>
  			</ul>
        <hero-detail [hero]="selectedHero"></hero-detail>
        `,
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
	selectedHero: Hero;
	heroes: Hero[];

  constructor(private heroService: HeroService){

  }

  ngOnInit(): void {
    console.log('----heroes init----');
    this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes)
        .catch(e => console.log(e.message));
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
