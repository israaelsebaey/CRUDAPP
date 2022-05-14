import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdListComponent } from './std-list/std-list.component';
import { StdAddComponent } from './std-add/std-add.component';
import { StdEditComponent } from './std-edit/std-edit.component';
import { StdDetailsComponent } from './std-details/std-details.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { StdDeleteComponent } from './std-delete/std-delete.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes:Routes=[
  {path:"",component:StdListComponent},
  {path:"add",component:StdAddComponent},
  {path:"edit/:id",component:StdEditComponent},
  {path:"details/:id",component:StdDetailsComponent},
  {path:"delete/:id",component:StdDeleteComponent}
]

@NgModule({
  declarations: [
    StdListComponent,
    StdAddComponent,
    StdEditComponent,
    StdDetailsComponent,
    StdDeleteComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,Ng2SearchPipeModule
  ]
})
export class StudentsModule { }
