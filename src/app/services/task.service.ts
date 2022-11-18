import {Injectable} from '@angular/core';
import {Task} from "../model/task";
import {TaskStatus} from "../model/task-status";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [];
  taskList =  new BehaviorSubject<Task[]>([]) ;


  constructor() {
    // @ts-ignore
    this.taskList.next(JSON.parse(localStorage.getItem("taskList")));
    this.tasks = this.taskList.getValue();

  }

  createTask(newTask: string) {

    const task = new Task();
    task.name = newTask;
    task.status =  TaskStatus.TODO;
    this.tasks.unshift(task);
    this.updateStorage();
  }


  updateStorage() {
    localStorage.setItem("taskList", JSON.stringify(this.tasks));
    this.taskList.next(this.tasks);
  }

  completeTask(task: Task) {
    console.log(this.tasks)

    const index = this.tasks.findIndex(t => {
      return t.name == task.name
    });

    this.tasks[index].status = TaskStatus.DONE;

    return this.updateStorage();
  }


  delete(task: Task): void {
    console.log(this.tasks)
    const index = this.tasks.findIndex(t => {
      return t.name == task.name
    });

    this.tasks[index].status = TaskStatus.DELETE;
    return this.updateStorage();
  }

}
