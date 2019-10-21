import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-ngbd-toast-global',
  templateUrl: './ngbd-toast-global.component.html',
  styleUrls: ['./ngbd-toast-global.component.scss']
})
export class NgbdToastGlobalComponent implements OnInit {
  constructor(public toastService: ToastService) {}

  showStandard() {
    this.toastService.show('I am a standard toast');
  }

  showSuccess() {
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
  }


  ngOnInit() {
  }

}
