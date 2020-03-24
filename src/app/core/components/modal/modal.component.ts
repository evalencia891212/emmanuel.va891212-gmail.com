import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Modal } from '../modal/modal';
import { SendInformationService } from '../../service/SendInformation/send-information.service';
import { MODAL } from 'src/app/app.const';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


  data: Modal = {
    buttons:[
      {
        callback:null,
        buttonText:''
      }
    ],
    title:'',
    message:'',
    display: false,
    entryComponent:null
  }

  componentRef:any;
  @ViewChild('loadComponent',{read: ViewContainerRef, static: false}) entry: ViewContainerRef;
  constructor(
    private resolver: ComponentFactoryResolver,
    private modalSer: SendInformationService<Modal>
  ) { }

  ngOnInit() {
    this.modalSer.getData(MODAL)
      .subscribe( this.response());
  }

  response(): (response: Modal) => void {
    return(response: Modal) => {
      if(response) {
        this.data = response;
        this.createComponent();
        return;
      }
      this.data.display = false;
    }
  }

   createComponent() {
     this.entry.clear();
     this.componentRef = this.entry.createComponent(this.resolver.resolveComponentFactory(this.data.entryComponent));
     this.componentRef.instance.data = this.data;
     this.componentRef.instance.destroy = this.destroy();      
  }

  destroy(): any{
    return () => this.componentRef.destroy();
  }

}
