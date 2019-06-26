import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular02';
  url = 'https://github.com/BCNCodes/mean-stack2/blob/master/presentaciones/Binding.pdf';
  urlarray = ['https://github.com/BCNCodes/mean-stack2/blob/master/presentaciones/Binding.pdf'];
  valorbtn1:Boolean = false;
  valorbtn2:Boolean = true;
  valorbtn3:Boolean = true;

  txtBtn1:String = "Habilitado";
  txtBtn2:String = "deshabilitado";
  txtBtn3:String = "deshabilitado";
  /*valorbtnarray = ['false' , 'true'];*/

  textoSaludar ="Este btn esta habilitado";
  textoActivar ="Activar btn Saludo";
  textoDesactivar ="Este btn no esta habilitado";

  items = ['Roberto', 'Armando', 'Roger', 'Jaime'];
  todosValores: Array<string> = ['Roberto', 'Armando', 'Roger', 'Jaime'];

  mostrarAviso(){
    alert('Has pulsado el botón!');
  }


  activarSaludo() {
  }
  desactivarSaludo() {
  }

  clickbot1(){
    this.valorbtn1 = true;
    this.txtBtn1 = "deshabilitado";
    this.valorbtn2 = false;
    this.txtBtn2 = "Habilitado";
    this.valorbtn3 = false;
    this.txtBtn3 = "Habilitado";
  }

  clickbot2(){
    alert('Has pulsado el botón!');
  }

  clickbot3(){
    this.valorbtn1 = false;
    this.txtBtn1 = "Habilitado";
    this.valorbtn2 = true;
    this.txtBtn2 = "deshabilitado";
    this.valorbtn3 = true;
    this.txtBtn3 = "deshabilitado";
  }

}
