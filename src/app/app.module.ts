import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { SlidesComponent } from './components/slides/slides.component';
import { SketchesComponent } from './components/sketches/sketches.component';
import { PlaybookAreaComponent } from './components/playbook-area/playbook-area.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidesComponent,
    SketchesComponent,
    PlaybookAreaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
