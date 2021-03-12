import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AddItemsComponent } from './components/add-items/add-items.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';



const routes: Routes = [
{ path:'', component: MainComponent},
  { path:'addbook', component: AddItemsComponent},
  { path:'edit/:id', component: EditItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
