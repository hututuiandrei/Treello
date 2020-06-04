import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Category} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CachingService {

  private LISTSKEY = "LISTSKEY";
  private lists: Category[];

  constructor() {
  }

  getLists(): Observable<Category[]> {
    return of(this.lists);
  }

  restoreFromCache() {

    var listsJson = require('./data.json');
    var cachedData = localStorage.getItem(this.LISTSKEY);
    this.lists = (cachedData == null) ? listsJson : JSON.parse(cachedData);
  }

  cacheChanges() {
    var savedJson = JSON.stringify(this.lists);
    localStorage.setItem(this.LISTSKEY, savedJson);
  }
}
