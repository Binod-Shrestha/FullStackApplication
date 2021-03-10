import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { AddItemsComponent } from './components/add-items/add-items.component';
import { DisplayItemsComponent } from './components/display-items/display-items.component';
import { UpdateComponentsComponent } from './components/update-components/update-components.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AddItemsComponent,
    DisplayItemsComponent,
    UpdateComponentsComponent,
    UpdateComponentsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
