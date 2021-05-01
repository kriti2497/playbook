import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  @Input() sliderList;
  @Output() dropEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.sliderList)
  }
  
  drop(event: CdkDragDrop<string[]>){
    this.dropEvent.emit(event)
  }

}
