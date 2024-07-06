import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ItemListComponent } from './item-list.component';
import { ItemService } from './item.service'; // Adjust path if necessary

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ItemService], // Provide ItemService
  bootstrap: [AppComponent]
})
export class AppModule { }
