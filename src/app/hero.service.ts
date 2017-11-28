import { Injectable } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
	{id: 1, name: 'liuhui', single: true},
	{id: 2, name: 'zhangsan', single: true},
	{id: 3, name: 'lisi', single: false},
	{id: 4, name: 'wangwu', single: false},
	{id: 5, name: 'maliu', single: true},
	{id: 6, name: 'zhaoqi', single: false}
];

@Injectable()
export class HeroService {
	
	getHeroes(): Promise<Hero[]> {
		return new Promise(function(resolve, reject) {
			setTimeout(()=> {
				//随机返回正确结果或错误
				let rand = Math.random();
				if (rand > 0.5) {
					resolve(HEROES);
				} else {
					reject(new Error('糟糕,又出Bug了'));
				}
			},3000);
		});
	}
}