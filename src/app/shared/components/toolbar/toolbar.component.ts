import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'ec-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input()
  sidenav: MatSidenav;

  constructor() { }

  ngOnInit(): void {
    console.log('Sidenav => '+ this.sidenav)
  }

  cadena: string = 'esta es una cadena'

  ngAfterViewInit() {
    localStorage.removeItem('login')
    setTimeout(() => {
      localStorage.setItem('login','token')

      this.cadena= '';
      
    }, 8000);
    
  }

}
