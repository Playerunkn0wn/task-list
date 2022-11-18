import { Injectable } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmComponent} from "../confirm/confirm.component";
import { Task } from '../model/task';
import {TaskService} from "./task.service";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog,
              private taskService: TaskService) { }

  showConfirmDelete( task: Task ): void {

    const dialogRef = this.dialog.open(
      ConfirmComponent,
      {
        disableClose: true,
        data: {
          header: "Aufgabe löschen",
          body: "Wollen Sie die offene Aufgabe wirklich löschen? Die Aufgabe wird als erledigt markiert.",
          dangerous: true
        }
      });


    dialogRef.afterClosed().subscribe(response => {
      console.log(response);
      if (response) {
        this.taskService.delete(task);
      }
    })
  }
}
