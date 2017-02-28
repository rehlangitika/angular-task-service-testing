import {Component, OnInit} from "@angular/core";
import {AppSingletonService} from "../app.singletonservice";
import {Task} from "../task";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'show',
  templateUrl: './showtask.component.html',
  styleUrls: ['']
})

export class ShowTaskComponent implements OnInit {

  myTasks: Task[];
  newTasks: Task[];

  constructor(private service: AppSingletonService, private router: Router) {
  }

  ngOnInit() {
    this.service.showTask().subscribe(data => {
      this.myTasks = data;
    }, error => {
      alert(error)
    });
  }

  deleteTask(id: string) {
    this.service.delete(id).subscribe((data: any) => {
      this.newTasks = data;
      alert("Deleted Successfully!")
    }, error => {
      alert(error)
    });
    this.service.showTask().subscribe(data => {
      this.myTasks = data;
    }, error => {
      alert(error)
    });
  }

  goToEdit(i: string) {
    this.router.navigate(['edit', i])
  }

}
