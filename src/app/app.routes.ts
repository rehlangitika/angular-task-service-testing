import {Routes} from '@angular/router'
import { CreateTaskComponent } from './createtask/createtask.component'
import {ShowTaskComponent} from "./showtask/showtask.component";
import {EditTaskComponent} from "./edittask/edittask.component";

export const routes: Routes =[{
  path : 'create',
  component : CreateTaskComponent
},{
  path: 'show',
  component: ShowTaskComponent
}, {
    path: 'edit/:id',
  component: EditTaskComponent
}];
