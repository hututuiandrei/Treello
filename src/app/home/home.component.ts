import { Component, OnInit, OnDestroy } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {TaskLists} from '../models/lists-tasks'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private static KEY = "KEY";
  private listsJson = '[{"name": "Backlog","tasks": [1,2,3]},{"name": "In progress","tasks": [3,4,5]},{"name": "Ready for Test","tasks": [6,7,8]},{"name": "Done","tasks": [9,10,11]}]';
  lists: TaskLists[];

  constructor() {
  }

  ngOnInit(): void {
    this.lists = this.restoreFromCache();
  }

  drop(event: CdkDragDrop<TaskLists>) {
    if (event.previousContainer === event.container) {

      moveItemInArray(event.container.data.tasks, event.previousIndex, event.currentIndex);

    } else {
      transferArrayItem(event.previousContainer.data.tasks,
                        event.container.data.tasks,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.cacheChanges();
  }

  private cacheChanges() {
    var savedJson = JSON.stringify(this.lists);
    localStorage.setItem(HomeComponent.KEY, savedJson);
  }

  private restoreFromCache() {
    var cachedData = localStorage.getItem(HomeComponent.KEY);
    return (cachedData == null) ? JSON.parse(this.listsJson) : JSON.parse(cachedData);
  }
}
