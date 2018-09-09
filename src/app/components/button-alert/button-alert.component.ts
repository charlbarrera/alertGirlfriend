import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-button-alert',
  templateUrl: './button-alert.component.html',
  styleUrls: ['./button-alert.component.scss']
})
export class ButtonAlertComponent implements OnInit {

  constructor( private service: ServiceService) { }

  ngOnInit() {
  }

  sendAlert() {
      this.service.activarAlert();
  }

}
