import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  titles: Record<string, string> = {
    siblingA: "sibling a",
    siblingB: "sibling b",
    siblingC: "sibling c",
  };
}
