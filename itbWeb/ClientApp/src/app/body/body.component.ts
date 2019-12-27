import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public title: String = 'Elige una carrera';
  public screenLitle: Number = 1089;
  public ClassModal: String;

  constructor( private router: Router ) { }
  public modalView: boolean;

  detectScreen() {
    if (screen.width <= this.screenLitle) {
      this.ClassModal = 'container';
      this.modalView = true;
    } else {
      this.ClassModal = 'container d-none';
      this.modalView = false;
    }
    console.log(screen.width);
  }

  navigateCarreras(roots){
    this.router.navigate([roots]);
  }

  ngOnInit() {
  }
}
