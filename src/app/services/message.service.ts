import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = []

  add(mesg: string) {
    this.messages.push(mesg)
  }

  clear() {
    this.messages = []
  }

}
