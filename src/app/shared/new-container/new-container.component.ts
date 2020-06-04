import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../core/models/category'

@Component({
  selector: 'app-new-container',
  templateUrl: './new-container.component.html',
  styleUrls: ['./new-container.component.css']
})
export class NewContainerComponent {

  @Input() containers;
 @Output() applyChanges: EventEmitter<any> = new EventEmitter();

  addContainerSelected: boolean = false;

  toogleNewContainer() {
    this.addContainerSelected = ! this.addContainerSelected;
  }
  addNewContainer(container) {

    var newCategory = new Category();
    newCategory.name = container.title;
    newCategory.tasks = [];

    this.applyChanges.emit();

    this.containers.push(newCategory);
    this.toogleNewContainer();
  }
}
