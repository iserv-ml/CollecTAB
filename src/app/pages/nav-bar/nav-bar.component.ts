import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService';
import { SwUpdate } from '@angular/service-worker';
// import { cilList, cilShieldAlt } from '@coreui/icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  // icons = { cilList, cilShieldAlt };
  user: any;

  constructor(
    private auth: AuthService, 
    private router: Router,
    // private swUpdate: SwUpdate
  ) { }

  // ngOnInit(): void {
  // }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') as string);
    this.auth.getUserObservable()
    .subscribe(res => this.user = res);
    console.log(this.user);
    // this.initializeApp();
    }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.user = null;
    this.auth.setUserData(0);
    this.router.navigate(['/login']);
    // location.reload();
  }

  open() {
    const a = document.getElementById("mySidebar")
    a != null ?  a.classList.toggle("display") : ''
  }

  close() {
    const a = document.getElementById("mySidebar")
    a != null ?  a.classList.toggle("close") : ''
  }

}
