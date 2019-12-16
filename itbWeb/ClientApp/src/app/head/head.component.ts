import { Component, OnInit } from '@angular/core';
import { sigInModel } from '../models/log.models';
import { NgForm } from '@angular/forms';
import { LoginService } from '../servicios/login.service';


@Component({
    selector: 'app-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

    signIn: sigInModel = new sigInModel();
    passwordType: any = 'password';
    passwordShown: boolean = false;


  constructor(private loginServices: LoginService) { }

    public showpass() {
        console.log('activo');
        if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordType = 'password';
        } else{
            this.passwordShown = true;
            this.passwordType = '';
        }
    }

    

    ngOnInit() {
    }

    registrar(form: NgForm) {

        

        if (form.invalid) {
            console.log('es inválido');
            return;
        }
        /*
        console.log(form);
        console.log(this.signIn);
        */

      this.loginServices.crearLog(this.signIn).subscribe(
        resp => {
          return console.log(resp);
        });


    }
}
