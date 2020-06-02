import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent {

  addCardSelected: boolean = false;

  @Input() title;

  toogleNewCard() {

    this.addCardSelected = !this.addCardSelected;
  }
}
