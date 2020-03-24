import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import {FieldConfig} from '../../core/components/form/models/field-config.interface';
import { FormTypes } from 'src/app/core/components/form/config/form-config';
import {MesModalContainerComponent} from '../../core/components/form/containers/mes-modal-container/mes-modal-container.component';
import { SendInformationService } from 'src/app/core/service/SendInformation/send-information.service';
import { Modal } from 'src/app/core/components/modal/modal';
import { ModalBuilderService } from 'src/app/core/service/ModalBuilder/modal-builder.service';
import { MODAL } from 'src/app/app.const';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit,AfterViewInit {
  
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }

  inputTestConfig: FieldConfig[];

  @ViewChild('formComponent',{static: false}) 
  formComponent:MesModalContainerComponent;
  

  constructor(
    private modalService: SendInformationService<Modal>,
    private modalBuilder: ModalBuilderService,
  ) { }

  ngOnInit() {
    this.inputTestConfig = [
      {    
          //Indate the basic functionality an attributes for each controll
          type: FormTypes.input,
          name: 'user',
          inputType: 'text',
          placeholder:'Write your user',
          validation: []
      },
      {    
        type: FormTypes.input,
        name: 'password',
        inputType: 'text',
        placeholder: 'Write the user password',
        validation: []
      },
      {    
        type: FormTypes.input,
        name: 'mail',
        inputType: 'text',
        placeholder: 'Write the email',
        validation: []
      }
    ]
  }

  showModal(){
    debugger;
    this.modalService.sendData(this.modalBuilder.getModalData({
      title: 'Message',
      message: 'Modal generated dinamicaly',
      buttons: [
        {
          buttonText: 'Aceptar',
        }
      ],
      config: this.inputTestConfig,//Tis is te config for make the html controls
    }, 3), MODAL);
  }



}
