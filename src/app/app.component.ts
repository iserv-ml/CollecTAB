import { Component } from '@angular/core';
import { PageHeaderService } from './services/page-header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title= 'BNSapp';

  constructor(private service: PageHeaderService) {}

  // ngOnInit() {
  //   this.service.emitirTitulo.subscribe(
  //     titulo => {
  //       console.log('Titulo: '+this.pageTitle)
  //       this.pageTitle = titulo;
  //   });
  // }
}