import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../model/task";
import {TaskStatus} from "../model/task-status";
import {TaskService} from "../services/task.service";
import {DialogService} from "../services/dialog.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  @Input() task: Task;

  constructor(private taskService: TaskService,
              private dialogService: DialogService) {
  }

  ngOnInit() {
  }

  complete() {
    if (this.task.status != TaskStatus.DONE) {
      this.task.status = TaskStatus.DONE ;
      this.taskService.completeTask(this.task);
    }
  }

  delete() {
   this.task.status !== 0 ? this.dialogService.showConfirmDelete(this.task) : this.taskService.delete(this.task);
  }
}
