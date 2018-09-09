import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  alertado = false;

  activarAlert() {
      this.alertado = true;
      console.log(this.alertado);
  }

  constructor() { }
}
