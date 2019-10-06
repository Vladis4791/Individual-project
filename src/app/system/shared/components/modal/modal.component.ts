import {Component, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
// import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/index';
import {DailyActivity} from '../../models/dailyActivity.model';
import {Note} from '../../models/note.model';
import {EditService} from '../../services/edit.service';
import {Router} from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() mode: string;

  constructor(
    private editService: EditService,
    private currentRouter: Router
  ) {}

  sub: Subscription;
  sub1: Subscription;

  onSubmit(form: NgForm) {
    const nameComponent = this.currentRouter.url.substr(1);
    console.log('some1')
    if (this.mode === 'create') {
      console.log('here');
      this.createItem(form, nameComponent);
    } else if (this.mode === 'remove') {
      console.log('some');
      this.deleteItems(3, nameComponent);
    }



  }

  createItem(form, nameComponent) {
    const {time} = form.value;
    const {name} = form.value;
    const {description} = form.value;
    const task = ( time ) ? new DailyActivity(name, time) : new Note(name, description);

    this.sub = this.editService.addTask(task, nameComponent)
      .subscribe((problem: any) => {
        form.reset();
    });
  }



  // const task = new Dai

  ngOnInit() {

  }

  deleteItems(id, nameComponent) {
    this.sub1 = this.editService.deleteTask(id, nameComponent).subscribe();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (this.sub1) {
      this.sub.unsubscribe();
    }
  }


}
