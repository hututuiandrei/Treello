import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Category} from '../core/models/category'
import {CachingService} from '../core/services/caching.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lists: Category[];

  constructor(private cachingService: CachingService) {}

  ngOnInit(): void {
    this.cachingService.restoreFromCache();
    this.cachingService.getLists().subscribe(lists => this.lists = lists);
  }

  drop(event: CdkDragDrop<Category>) {
    if (event.previousContainer === event.container) {

      moveItemInArray(event.container.data.tasks, event.previousIndex, event.currentIndex);

    } else {
      transferArrayItem(event.previousContainer.data.tasks,
                        event.container.data.tasks,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.cachingService.cacheChanges();
  }

  onChanges() {
    this.cachingService.cacheChanges();
  }
}
