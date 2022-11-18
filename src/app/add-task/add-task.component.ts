import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from "../model/task";
import {TaskStatus} from "../model/task-status";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TaskService} from "../services/task.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent  implements OnInit{

  task: Task;
  newTask: string;

  constructor(private formBuilder: FormBuilder,
              private taskService: TaskService) {
    this.task = {name: "", status: TaskStatus.TODO}
  }

  ngOnInit() {
  }

  onCreateTask() {
    if (this.newTask) {
      this.taskService.createTask(this.newTask);
      this.newTask = '';
    } else {
      alert("Aufgabe kann nicht null sein")
    }
  }
}
