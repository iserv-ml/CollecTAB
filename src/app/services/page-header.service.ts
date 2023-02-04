import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageHeaderService {

  emitirTitulo = new EventEmitter();
  constructor() { }
}
