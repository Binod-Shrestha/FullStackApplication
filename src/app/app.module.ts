import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { AddItemsComponent } from './components/add-items/add-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {BookService} from './service/book.service';
import { HttpClientModule } from '@angular/common/http';
import { CdkColumnDef } from '@angular/cdk/table';
import { FormsModule } from '@angular/forms';
import { EditItemComponent } from './components/edit-item/edit-item.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AddItemsComponent,
    MainComponent,
    EditItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,

  ],
  providers: [BookService, CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
