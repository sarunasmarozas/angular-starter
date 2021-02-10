import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { TodoItem } from "../interfaces/ui-interfaces";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  todo$ = new BehaviorSubject<TodoItem>(undefined);

  constructor(private http: HttpClient) {}

  getTodo() {
    const url = "https://jsonplaceholder.typicode.com/todos/2";
    return this.http
      .get<TodoItem>(url)
      .pipe(tap((todo) => this.todo$.next(todo)));
  }
}
