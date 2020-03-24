import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendInformationService<T> {

  default: string;
  data: Array<BehaviorSubject<T>> = [];

  constructor() { 
    this.default = 'default';
  }

    /**
   *
   * @param data Informción a Enviar
   * @param key Clave de Acceso al Observador
   */
   sendData(data: T, key: string = this.default)
   {
     if(!this.data[key]) {
       this.getData(key);
     }
     this.data[key].next(data);
   }

   /**
   * envia null al observador
   * @param key Clave de Acceso al Observador
   */
   clearData(key: string = this.default): void {
     if(!this.data[key]) {
       this.data[key] = new BehaviorSubject<T>(null);
       return;
     }
     this.data[key].next(null);
   }

   /**
   * subscribción al observador y los datos que fluyan por el mismo
   * @param key Clave de Acceso al Observador
   */
   getData(key: string = this.default): Observable<T> {
     if(!this.data[key]) {
       this.data[key] = new BehaviorSubject<T>(null);
     }
     return this.data[key].asObservable();
   }

   /**
   * Acceso a una copia del ultimo valor enviado.
   * @param key Clave de Acceso al Observador
   */
   lastValue(key: string =  this.default): T {
     if(!this.data[key]) {
       this.data[key] = new BehaviorSubject<T>(null);
     }
     return this.data[key].getValue();
   }

   /**
   * Cancela la subscripción
   * @param observador subscripcion
   */
  unSubscribe(observer: Subscription): void {
    observer.unsubscribe();
  }


}
