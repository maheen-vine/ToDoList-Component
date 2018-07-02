import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { InputListComponent } from './todolist/inputlist/inputlist.component';
import { ListComponent } from './todolist/list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    InputListComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
