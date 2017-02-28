import {Component, OnInit} from "@angular/core";
import {AppSingletonService} from "../app.singletonservice";
import {Task} from "../task";
import {ActivatedRoute} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'edit',
  templateUrl: './edittask.component.html',
  styleUrls: ['']
})

export class EditTaskComponent implements OnInit {

  myTasks: Task[] = [];
  index: string;
  task: Task = new Task('', '', '', '');

  constructor(private service: AppSingletonService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      this.index = data.id;
      this.service.showTask().subscribe(data => {
        this.myTasks = data;
        this.task = this.myTasks.filter(x => x._id == this.index)[0];
      }, error => {
        alert(error)
      });
    });
  }

  create(taskDate: string, taskTitle: string, taskDesc: string, taskPriority: string) {
    this.service.updateTask(this.task).subscribe(data => {
      this.myTasks=data;
      alert("Suucessful!")
    }, error => {
      alert(error)
    });
  }

}
