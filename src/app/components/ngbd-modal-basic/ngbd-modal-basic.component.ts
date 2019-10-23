import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LightYearCalcService } from '../../services/light-year-calc.service';

@Component({
  selector: 'app-ngbd-modal-basic',
  templateUrl: './ngbd-modal-basic.component.html',
  styleUrls: ['./ngbd-modal-basic.component.scss']
})
export class NgbdModalBasicComponent implements OnInit {
  @Input() result;
  @Input() time;//total weight/distance
  @Input() lastelement;
  @ViewChild('content', {static: false}) taskNoteRef: ElementRef;
  closeResult: string;
  calculation: LightYearCalcService = new LightYearCalcService();

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openModel() {
    this.modalService.open(this.taskNoteRef, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
