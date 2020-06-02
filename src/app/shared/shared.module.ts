import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { ContainerComponent } from './container/container.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [

    TaskComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatToolbarModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
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
