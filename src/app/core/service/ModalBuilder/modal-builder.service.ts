import { Injectable } from '@angular/core';
import { SendInformationService } from '../SendInformation/send-information.service';
import { Modal } from '../../components/modal/modal';
import { CALLBACK_WF, CANAL, CANALES, ACTIONFROMSTEP } from 'src/app/app.const';
import { AlertModalComponent } from '../../components/modal/alert-modal/alert-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalBuilderService {

  constructor(
    private actionStep: SendInformationService<(item) => void>,
    private obser: SendInformationService<string>
  ) { }

  getModalData( response: any, errorType: any ): Modal {
    return {
       // tslint:disable-next-line: no-shadowed-variable
       2: (response) => this.redirecToWfCallback(response),
       // tslint:disable-next-line: no-shadowed-variable
       3: (response) => this.simple(response),
       // tslint:disable-next-line: no-shadowed-variable
       4: (response) => this.actionFromStep(response),
       // tslint:disable-next-line: no-shadowed-variable
       5: (response) => this.redirecTo(response),
    }[errorType](response);
  }  
  
  redirecToWfCallback(response: any): Modal {
    return {
      display: true,
      buttons: response.buttons.map( item => {
        item.class = 'alertModal__footer--button alertModal__footer--button--primary';
        const url = this.obser.lastValue(CALLBACK_WF);
        if( this.obser.lastValue(CANAL) !==  CANALES.WEB && this.obser.lastValue(CANAL) !== CANALES.APP) {
          item.callback = (close) => {
            close();
          };
        }
        if(this.obser.lastValue(CANAL) === CANALES.WEB) {
          item.callback = (close) => {
            window.open(url || '', '_blank');
            close();
          };
        }
        if(this.obser.lastValue(CANAL) === CANALES.APP) {
          item.callback = ( close ) => {
            close();
          };
        }
        return item;
      }),
      title: response.title,
      message: response.message,
      entryComponent: AlertModalComponent
    };
  } 

  redirecTo(response: any): Modal {
    console.log(response);
    return {
      display: true,
      buttons: response.buttons.map(item => {
        item.class = 'alertModal__footer--button alertModal__footer--button--primary';
        const url = item.callback.toString();
        item.callback = ( close ) => {
          window.open(url || '', '_blank');
          close();
        };
        return item;
      }),
      title: response.title,
      message: response.message,
      entryComponent: AlertModalComponent
    };
  }

  simple(response: any): Modal {
    return {
      display: true,
      buttons: response.buttons.map( item => {
        item.class = 'btn btn-primary';
        item.callback = ( close ) => close();
        return item;
      }),
      config:response.config,
      title: response.title,
      message: response.message,
      entryComponent: AlertModalComponent
    };
  }

  actionFromStep(response: any): Modal {
    return {
      display: true,
      buttons: response.buttons.map( item => {
        item.class = 'alertModal__footer--button alertModal__footer--button--primary';
        item.callback = ( close ) => this.actionStep.lastValue(ACTIONFROMSTEP)(close);
        return item;
      }),
      title: response.title,
      message: response.message,
      entryComponent: AlertModalComponent
    };
  }

}
