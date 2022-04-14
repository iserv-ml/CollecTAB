import { Component, OnInit } from '@angular/core';
import { LottieSplashScreen } from '@awesome-cordova-plugins/lottie-splash-screen/ngx';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.page.html',
  styleUrls: ['./rapport.page.scss'],
})
export class RapportPage implements OnInit {

  clicked= false

  constructor(
    private lottieSplashScreen: LottieSplashScreen
  ) { 
    this.clicked = false
  }

  ngOnInit() {
  //   this.lottieSplashScreen.show('www/lottie/animation.json', false, 1024, 768)
  // .then((res: any) => console.log(res))
  // .catch((error: any) => console.error(error));
  }

}
