import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ModalModule } from "ngb-modal";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentAComponent } from "./components/component-a/component-a.component";
import { ComponentBComponent } from "./components/component-b/component-b.component";
import { ComponentCComponent } from "./components/component-c/component-c.component";

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
