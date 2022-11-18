import {Component, OnDestroy, OnInit} from '@angular/core';
import {Task} from "../model/task";
import {TaskService} from "../services/task.service";
import {DialogService} from "../services/dialog.service";
import {TaskStatus} from "../model/task-status";
import {Subscriber, Subscription} from "rxjs";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, OnDestroy{

  tasks: Task[] = [];
  task: Task;
  index: number;
  subs: Subscription[] = [];


  constructor(private taskService: TaskService,
              private dialogService: DialogService) {

  }


  ngOnInit(): void {
   this.subs.push(this.taskService.taskList.subscribe(r => {
     console.log(r)
     this.tasks = r;
   }));
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe())
  }

}
