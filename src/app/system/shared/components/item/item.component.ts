import {AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, AfterViewInit {

  @Input() componentName: string;
  @Input() args: object;
  @ViewChild('checkbox') checkbox: ElementRef;
  // @Output() count: number;
  // count = 0;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }



//   changedEl() {
//     // if ( this.divView.nativeElement.checked ) {
//     //   this.count = 1;
//     // } else {
//     //   this.count = 0;
//     // }
// }

}
