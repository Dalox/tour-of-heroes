import { HeroService } from './../../services/hero.service';
import { HEROES } from './../../interfaces/constants/mock-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/class/hero';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]

  constructor(private heroService: HeroService, private msgService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
