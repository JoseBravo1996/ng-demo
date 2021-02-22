import { MaterialModule } from './../material/material.module';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';

import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PersonComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    // MaterialModule
  ],
  exports: [PersonComponent]
})
export class PersonModule { }
