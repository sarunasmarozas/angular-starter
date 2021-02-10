import { Component, Input, OnInit } from "@angular/core";
import { tap } from "rxjs/operators";
import { TodoItem } from "src/app/interfaces/ui-interfaces";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-component-a",
  templateUrl: "./component-a.component.html",
  styleUrls: ["./component-a.component.css"],
})
export class ComponentAComponent implements OnInit {
  @Input() title: string;

  todo: TodoItem;

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  getTodoFromApi() {
    this.todoService
      .getTodo()
      .pipe(tap(() => console.log("%c getTodoFromApi ran", "color: salmon")))
      .subscribe((todoFromApi: TodoItem) => (this.todo = todoFromApi));
  }
}
