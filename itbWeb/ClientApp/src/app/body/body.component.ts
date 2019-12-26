import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public title: string = "Elige una carrera";
  public screenLitle: number = 1089;
  public ClassModal: string

  constructor( ) { }
  public modalView: boolean;
  
  detectScreen() {
    if (screen.width <= this.screenLitle) {
      this.ClassModal = "container";
      this.modalView = true;
    }
    else {
      this.ClassModal = "container d-none";
      this.modalView = false; 
    }
    console.log(screen.width);
  }

  ngOnInit() {
    
  }
}
