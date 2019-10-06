import {Component, Input, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {PassVarService} from '../../services/pass-var.service';
import {Subscription} from 'rxjs/index';
import {ItemComponent} from '../item/item.component';
declare let $: any;

@Component({
  selector: 'app-edit-mode',
  templateUrl: './edit-mode.component.html',
  styleUrls: ['./edit-mode.component.scss']
})
export class EditModeComponent implements OnDestroy {

  @Input() componentName: string;

  countSelectedItems = 0;
  subscription: Subscription;
  @ViewChildren(ItemComponent) items: QueryList<any>;



  constructor(private passService: PassVarService) {

    this.subscription = this.passService.myMethod$.subscribe((data) => {
      this.countSelectedItems = data;
    });

  }

  cancelSelectionItems() {
    $(function () {
      $('body').on('click', '.close-button', function() {
        $('.checkbox').prop({'checked': false});
        console.log('we are here!!');
        this.countSelectedItems = 0;
      });
    });
  }



  createWord(countSelectedItems): string {
    let word = 'элемент';
    const a = [2, 3, 4];

    if ((countSelectedItems % 100) === 1) {
      return word;
    }

    if (a.indexOf(countSelectedItems % 100) !== -1) {
       return word += 'а';
    }



    return word + 'ов';
  }

  ngOnDestroy() {
    if ( this.subscription ) {
      this.subscription.unsubscribe();
    }
  }

}
