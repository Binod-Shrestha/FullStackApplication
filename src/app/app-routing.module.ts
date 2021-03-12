import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AddItemsComponent } from './components/add-items/add-items.component';



const routes: Routes = [
{ path:'', component: MainComponent},
  { path:'addbook', component: AddItemsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
