import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Task} from '../models/task';
import {Category} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CachingService {

  private LISTSKEY = "LISTSKEY";
  private CARDCNTIDKEY = "CARDCNTIDKEY";
  private lists: Category[];

  private cardIdCounter;

  constructor() {
  }

  getLists(): Observable<Category[]> {
    return of(this.lists);
  }

  restoreFromCache() {

    //localStorage.clear();
    var listsJson = require('./data.json');

    var cachedCardIdCounter = localStorage.getItem(this.CARDCNTIDKEY);
    this.cardIdCounter = (cachedCardIdCounter == null) ? 0 : cachedCardIdCounter;

    var cachedData = localStorage.getItem(this.LISTSKEY);
    this.lists = (cachedData == null) ? listsJson : JSON.parse(cachedData);
  }

  cacheChanges() {
    var savedJson = JSON.stringify(this.lists);
    localStorage.setItem(this.LISTSKEY, savedJson);
  }

  addCard(card) {

    var index = this.lists.findIndex(foundContainer => foundContainer.id == card.containerId);
    var newTask = new Task();
    newTask.id = this.cardIdCounter;
    newTask.title = card.cardTitle;
    newTask.description = card.cardDesc;
    this.lists[index].tasks.push(newTask);
    this.cacheChanges();

    this.cardIdCounter++;
    localStorage.setItem(this.CARDCNTIDKEY, this.cardIdCounter);
  }
}
