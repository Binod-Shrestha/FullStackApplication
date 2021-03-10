import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


const AngularMaterialModule = [ MatToolbarModule, MatInputModule, MatTableModule, MatButtonModule ];
@NgModule({
  imports: [AngularMaterialModule],
  exports: [AngularMaterialModule]
})
export class MaterialModule { }
