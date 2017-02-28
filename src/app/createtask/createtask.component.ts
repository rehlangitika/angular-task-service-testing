import {Component, OnInit} from "@angular/core";
import {AppSingletonService} from "../app.singletonservice";
import {Task} from "../task";

@Component({
  moduleId: module.id,
  selector: 'create',
  templateUrl: './createtask.component.html',
  styleUrls: ['']
})

export class CreateTaskComponent implements OnInit {

  myTasks: Task[];

  constructor(private service: AppSingletonService) {
  }

  ngOnInit() {
    this.myTasks = this.service.tasks;
  }

  create(taskDate: string, taskTitle: string, taskDesc: string, taskPriority: string) {
    let t = new Task(taskDate, taskTitle, taskDesc, taskPriority);
    this.service.addTask(t).subscribe(data => {
      this.myTasks = data;
      alert("Successful!")
    }, error => {
      alert(error)
    });
  }

}

