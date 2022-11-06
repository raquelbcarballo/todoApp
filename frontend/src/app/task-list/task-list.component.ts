import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = ["tarea1", "tarea2", "tarea3"];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask() {
    this.http
      .get('http://localhost:3000/task')
      .subscribe(data => {
        console.log(data);
      });
  }
}
