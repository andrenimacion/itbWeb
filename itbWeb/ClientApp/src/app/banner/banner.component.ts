import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public hSho: Boolean = false;

  public menuData: any = {
    _atMedica: 'Atencion Médica',
    _odotologia: 'Odontología',
    _ctaCruzRoja: 'Cuenta en la Cruz Roja',
    _desInfantil: 'Centro de Desarrollo Infantil',
    _biblioteca: 'Bibliotecas',
    _becas: 'Becas',
    _ayudFin: 'Ayudas Financieras',
    _bolEmpleo: 'Bolsa de Empleo'
  };

  public screenSho: Number = 743;

  constructor() { }

  ngOnInit() {
    console.log(this.menuData._atMedica)
  console.log(screen.width);
    console.log(screenLeft.toPrecision);
  }

  screenEvents() {
      if (screen.width <= this.screenSho) {
        this.hSho = false;
      } else {
        this.hSho = true;
      }
    }

}
