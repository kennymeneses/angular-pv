import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ec-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @ViewChild('check1')
  check1: ElementRef;

  @ViewChild('check2')
  check2: ElementRef;

  @ViewChild('check3')
  check3: ElementRef;


  @ViewChild('div_one')
  div_one: ElementRef;

  @ViewChild('div_two')
  div_two: ElementRef;

  @ViewChild('div_three')
  div_three: ElementRef;




  constructor() { }

  ngOnInit(): void {
    this.RotarPromos()
  }

  ngAfterViewInit() {

  }



  mostrar(imagen:any):void{
    console.log(imagen.src)
    // imagen.style.display='block'
    // imagen.style.opacity='1';
    // imagen.style.zIndex='2';
    // console.log('z-index: '+ imagen.style.display)
    // console.log('opacity: '+ imagen.style.opacity)
    // console.log('z-index: '+ imagen.style.zIndex)
  }

  verificacion(a:number, b:number){
    if(a-b == 0)
    {
      console.log('Sí rotará')
      return 0
    }
    else
    {
      console.log('No rotará')
      return 45000
    }
  }  

  RotarPromos():void{
        

    let intervalo = setInterval(async() => {
      
      if(this.check1.nativeElement.checked == true)
      {

        await setTimeout(() => 
        {
          // clearInterval(intervalo)
          this.check2.nativeElement.checked = true

        },0);

      }

      if(this.check2.nativeElement.checked == true){

        await setTimeout(() => {

          this.check3.nativeElement.checked = true
        },0);

      }

      if(this.check3.nativeElement.checked == true){
        
        await setTimeout(() => {
          this.check1.nativeElement.checked = true
        },0);
      }


  }, 14500);
  
  }


}

