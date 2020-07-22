import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscuelaComponent } from './escuela/escuela.component';
import { FacultadComponent } from './facultad/facultad.component';

@NgModule({
  declarations: [
    AppComponent,
    EscuelaComponent,
    FacultadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
