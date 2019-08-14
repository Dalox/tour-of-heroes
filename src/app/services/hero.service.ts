import { MessageService } from './message.service';
import { HEROES } from './../interfaces/constants/mock-heroes';
import { Hero } from 'src/app/interfaces/class/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private msgService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.msgService.add('HeroService: fetched heroes')
    return of (HEROES)
  }

}
