import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tsenfermeria',
  templateUrl: './tsenfermeria.component.html',
  styleUrls: ['./tsenfermeria.component.css']
})
export class TSenfermeriaComponent implements OnInit {

  public sHid: Boolean;
  public sHidB: Boolean;
  constructor(private router: Router) { }

  abrirForm(bool) {
      this.sHid = bool;
  }

  abrirModal(roots) {
      //this.sHidB = bool;
      this.router.navigate([roots]);
  }

  ngOnInit() {
  }

}
