import { Component, OnInit, ViewChild } from '@angular/core';
import { Modal } from '../modal';
import { MesModalContainerComponent } from '../../form/containers/mes-modal-container/mes-modal-container.component';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent {

  @ViewChild('formComponent',{static: false}) 
  formComponent:MesModalContainerComponent;

  data: Modal = {
    buttons: [
      {
        callback: null,
        buttonText:''
      }
    ],
    config:null,
    title:'',
    message:'',
    display:false,
    entryComponent:null
  };
  show: boolean;

  constructor() { 
    setTimeout( () => {
      this.show = true;
    },120);
  }

  destroy: any = () => {}

  onClose() {
    return () => {
      this.data.display = false;
      setTimeout(() => {
         this.destroy();
      },250);
    }
  }

}
