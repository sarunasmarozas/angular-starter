import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-component-b",
  templateUrl: "./component-b.component.html",
  styleUrls: ["./component-b.component.css"],
})
export class ComponentBComponent {
  @Input() title: string;
  @ViewChild("modal", { static: true }) modal: ElementRef;

  constructor(private modalService: NgbModal) {}

  openModal() {
    this.modalService.open(this.modal, { centered: true, size: "md" });
  }
}
