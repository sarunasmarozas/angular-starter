import { Component, Input, OnInit } from "@angular/core";
import { TodoItem } from "src/app/interfaces/ui-interfaces";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-component-c",
  templateUrl: "./component-c.component.html",
  styleUrls: ["./component-c.component.css"],
})
export class ComponentCComponent implements OnInit {
  @Input() title: string;

  todo: TodoItem;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.todo$.subscribe(
      (todoFromApi) => (this.todo = todoFromApi)
    );
  }
}
