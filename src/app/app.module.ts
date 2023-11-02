import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AlertModule } from '@shared/components/alert/alert.module';
import { InfoAdicionalModule } from '@shared/components/mensajes/info-adicional/info-adicional.module';
import { InputFocusModule } from '@shared/directives/input-focus/input-focus.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    AlertModule,
    InfoAdicionalModule,
    InputFocusModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
