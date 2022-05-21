import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLibraryComponent } from '../my-library.component';
import { RouterModule, Routes } from '@angular/router';

const routes :Routes = [{
  path:'', component: MyLibraryComponent
}]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
