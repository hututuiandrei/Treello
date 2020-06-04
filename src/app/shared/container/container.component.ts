import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../core/models/task'

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent {

  addCardSelected: boolean = false;

  @Input() container;
  @Output() applyChanges: EventEmitter<any> = new EventEmitter();

  toogleNewCard() {
    this.addCardSelected = !this.addCardSelected;
  }

  addNewCard(card) {

    var newTask = new Task();
    newTask.title = card.title;
    newTask.description = card.description;

    this.container.tasks.push(newTask);
    this.applyChanges.emit();

    this.toogleNewCard();
  }
}
