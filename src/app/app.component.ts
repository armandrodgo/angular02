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
  valor = true;
}
