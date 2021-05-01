import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sketches',
  templateUrl: './sketches.component.html',
  styleUrls: ['./sketches.component.scss']
})
export class SketchesComponent implements OnInit {

  @Input() imagesList;
  @Input() playBookList;
  @Output() dropEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.imagesList)
  }

  drop(event: CdkDragDrop<string[]>){
    this.dropEvent.emit(event)
  }

  addImages(){
    return  this.playBookList.map(res=>`${res.id}`);
  }

}
