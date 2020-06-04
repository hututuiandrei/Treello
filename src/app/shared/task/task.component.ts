import { Component, Input, Output, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() item;
  @Output() applyChanges: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {

    const dialogRef = this.dialog.open(TaskDialogComponent, {

      data: {title: this.item.title, description: this.item.description}
    });

  dialogRef.afterClosed().subscribe(result => {

    if(result) {
      this.item.title = result.title;
      this.item.description = result.description;
      this.applyChanges.emit();
    }
    });
  }
}
