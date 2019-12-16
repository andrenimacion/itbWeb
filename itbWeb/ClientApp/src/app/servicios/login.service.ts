import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sigInModel } from '../models/log.models';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //variable obtencion de url

  public Url: string = 'https://itbdb-7b921.firebaseio.com';

  constructor(private http: HttpClient) { }

  crearLog(log: sigInModel) {


    return this.http.post(`${this.Url}/logUser.json`, log);

  }  

}
