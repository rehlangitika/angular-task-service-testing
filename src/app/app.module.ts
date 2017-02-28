import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {} from './app.singletonservice'
import { AppComponent }  from './app.component';
import {AppSingletonService} from "./app.singletonservice";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {CreateTaskComponent} from "./createtask/createtask.component";
import {ShowTaskComponent} from "./showtask/showtask.component";
import {EditTaskComponent} from "./edittask/edittask.component";
import {HttpModule} from "@angular/http";

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule, RouterModule.forRoot(routes), HttpModule ],
  declarations: [ AppComponent, CreateTaskComponent, ShowTaskComponent, EditTaskComponent],
  bootstrap:    [ AppComponent ],
  providers: [AppSingletonService]
})
export class AppModule { }
