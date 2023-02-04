import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.scss']
})
export class ParametresComponent implements OnInit {
  user: any;

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user') as string);
    this.auth.getUserObservable()
    .subscribe(res => this.user = res);
    console.log(this.user);
  }

  open() {
    const a = document.getElementById("mySidebar")
    a != null ?  a.classList.toggle("display") : ''
  }

}
