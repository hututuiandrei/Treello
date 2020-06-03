import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { ContainerComponent } from './container/container.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';

@NgModule({
  declarations: [

    TaskComponent,
    ContainerComponent,
    TaskDialogComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatToolbarModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule
  ],
  exports: [
    TaskComponent,
    ContainerComponent,
    DragDropModule,
    MatToolbarModule,
    NoopAnimationsModule
  ]
})
export class SharedModule { }
