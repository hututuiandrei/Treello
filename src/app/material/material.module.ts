import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({

  exports: [

    DragDropModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
