import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent {

  addCardSelected: boolean = false;

  @Input() container;
  @Output() addCard: EventEmitter<any> = new EventEmitter();

  toogleNewCard() {
    this.addCardSelected = !this.addCardSelected;
  }

  addNewCard(card) {

    var newEvent = {"containerId" : this.container.id, "cardTitle" : card.title, "cardDesc" : card.description};

    this.addCard.emit(newEvent);
    this.toogleNewCard();
  }
}
