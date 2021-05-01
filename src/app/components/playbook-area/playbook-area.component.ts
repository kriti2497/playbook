import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-playbook-area',
  templateUrl: './playbook-area.component.html',
  styleUrls: ['./playbook-area.component.scss']
})
export class PlaybookAreaComponent implements OnInit {
@Input() playBookList;
@Output() dropEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  dropNested(event: CdkDragDrop<string[]>) {
    this.dropEvent.emit(event);
  }

  dropValue(event: CdkDragDrop<string[]>) {
    this.dropEvent.emit(event);
  }

  evenPredicate(item: CdkDrag<any>, current: CdkDrag<any>) {
    return current.data.length >= 1 ? false : true;
  }

}
