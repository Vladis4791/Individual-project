import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes = 10;

  // @Output() componentName: string;
  @Output() countSelected = new EventEmitter<number>();

  exampleFun() {
    this.countSelected.emit(this.notes);
  }


  constructor() { }

  ngOnInit() {
  }

}
