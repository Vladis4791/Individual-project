import {
   Component, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ModalComponent} from '../shared/components/modal/modal.component';
import {DailyActivityService} from '../shared/services/daily-activity.service';
import {Subscription} from 'rxjs/index';
import {ItemComponent} from '../shared/components/item/item.component';
import {PassVarService} from '../shared/services/pass-var.service';
// declare let $: any;

@Component({
  selector: 'app-daily-activity',
  templateUrl: './daily-activity.component.html',
  styleUrls: ['./daily-activity.component.scss']
})
export class DailyActivityComponent implements OnInit, OnDestroy {

  public modalRef: BsModalRef;
  subscription: Subscription;
  subscription1: Subscription;
  dailyTasks;
  @ViewChildren(ItemComponent) items: QueryList<any>;

  public count = 0;

  // public cancelSelection() {
  //
  //   // this.items.forEach((item) => {
  //   //   item.checkbox.nativeElement.checked = false;
  //   // });
  //   // this.passService.myMethod(0);
  // }

  constructor(
    private modalService: BsModalService,
    private dailyTasksService: DailyActivityService,
    private passService: PassVarService
  ) {
    // this.subscription1 = this.passService.myMethod$.subscribe((data) => {
    //   this.cancelSelection();
    //   console.log(data);
    // });
  }

  ngOnInit() {
    this.subscription = this.dailyTasksService.getDailyTasks()
      .subscribe((data) => {
        this.dailyTasks = data;
      });

  }



  countCheckedEl() {
    this.count = 0;
    this.items.forEach((item) => {
      if (item.checkbox.nativeElement.checked) {
        this.count += 1;
      }
    });
    this.passService.myMethod(this.count);
  }


  public openModal(template) {
    this.modalRef = this.modalService.show(template);
    // console.info(this.modalRef);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
