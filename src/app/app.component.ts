import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { PlayBook } from './models/playbook.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'playbook-assignment';

  sliderList: PlayBook[] = [
    {
      id: 1,
      color: 'red',
      contents: []
    },
    {
      id: 2,
      color: 'blue',
      contents: []
    },
    {
      id: 3,
      color: 'green',
      contents: []
    },
    {
      id: 4,
      color: 'yellow',
      contents: []
    },
    {
      id: 5,
      color: 'orange',
      contents: []
    },
    {
      id: 6,
      color: 'black',
      contents: []
    }
  ];

  imagesList = [
    {imgUrl: '../assets/images/nature.jpg'},
    {imgUrl: '../assets/images/deer.jpg'},
    {imgUrl: '../assets/images/heart.jpg'},
    {imgUrl: '../assets/images/leaves.jpg'},
    {imgUrl: '../assets/images/download.jpg'},
    {imgUrl: '../assets/images/stones.jpg'},
    {imgUrl: '../assets/images/images.jpg'}
  ]

  playBookList: PlayBook[] = [
    {
      id: 6,
      color: 'pink',
      contents: []
    },
  ];
  
  ngOnInit(){
  }

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  dropNested(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


}