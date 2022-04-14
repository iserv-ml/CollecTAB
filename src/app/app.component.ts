import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  user: any;
  
  public appPages = [
    // { title: 'Rapport d\'ouverture', url: '/rapport-ouverture', icon: 'journal' },
    { title: 'Insertion des rapports', url: '/rapport', icon: 'paper-plane' },
    { title: 'Demander un appel ', url: '/demande-appel', icon: 'call' },
    { title: 'Signaler un incident ou problème ', url: '/incident', icon: 'archive' },
    { title: 'Transmission des résultats du scrutin', url: '/resultat', icon: 'reader' },
    { title: 'Transmission des statistiques', url: '/statistique', icon: 'trending-up' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private auth: AuthService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.auth.getUserObservable()
    .subscribe(res => this.user = res);
    console.log(this.user);
    }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.user = null;
    this.auth.setUserData(0);
    this.router.navigate(['/login']);
    // location.reload();
  }
  
}
