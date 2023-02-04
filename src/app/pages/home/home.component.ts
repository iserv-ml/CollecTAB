import { NgIf } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
// import { GlobalService } from '../../services/global.service';
import { environment } from 'src/environments/environment';
// import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // options: AnimationOptions = {
  //   path: 'assets/json/statistique.json'
  // };

  search : any = "";
  customers : any;
  bons : any;
  // api = environment.api
  customer: any =  {
    'typeCard' :  'GOLD',
    'fidelity' : '000000',
    'inscriptionDate':'0000-00-00 00:00:00 ',
    'id':'0000000',
    'address':'',
    'phone':'',
    'serial': '0',
    'name': 'Nom Prénom',
    'qrCode': 'https://fr-fr.facebook.com/shopreate/',
    // 'img' : this.api+'avatar_image/3e3a0247-322e-4817-a439-2a94f7b89588'
  };
  sending: boolean = false;
  userDetails: any;
  constructor(
    private ngZone: NgZone,
    // private globalService:GlobalService
    ) { }

    // created(animation: any){
    //   this.ngZone.runOutsideAngular(()=>animation.play());
    // }

  ngOnInit(): void {

    setTimeout(() => {
      // this.searchUser()
    }, 300);
  }
  open() {
    const a = document.getElementById("mySidebar")
    a != null ?  a.classList.toggle("display") : ''
  }


  selectIt(customer:any){
    this.userDetails = null
    // this.getBons(customer.customerId)
    // this.getUserDetails(customer.customerId)
    const cartType = this.getCartType(customer.loyalityType)
    this.customer =  {
      'typeCard' : cartType,
      'fidelity' : customer.loyalityValue,
      'serial': customer.serial,
      'inscriptionDate':customer.creationDate,
      'id':customer.customerId,
      'address':this.userDetails?.address,
      'phone':this.userDetails?.phone,
      'name': customer.name,
      // 'img':this.api+'avatar_image/'+customer.serial,
      'qrCode': 'https://pkpass.shopreate.com/Customer/?serial='+customer.serial
    };
    this.open()
  }

  // searchUser(){
  //   if(this.search == ""){
  //     this.customers = []
  //     return
  //   }
  //   this.globalService.getObjects("search/"+this.search).subscribe(
  //     (res) => {
  //       this.customers = res
  //     }
  //   )
  // }

  // getBons(id:any){
  //   this.globalService.getObjects("listBonsSearch/"+id).subscribe(
  //     (res) => {
  //       this.bons = res
  //     }
  //   )
  // }

  // getUserDetails(id:any){
  //   this.globalService.getUserDetail(id).subscribe(
  //     (res) => {
  //       this.customer.phone = res[0]?.phone
  //       this.customer.address = res[0]?.address
  //     }
  //   )
  // }

  // sendSms(serial : number, customerId : number){
  //   console.log(serial);

  //   if(!this.sending){
  //     this.sending = true
  //     this.globalService.sendSms(customerId, serial).subscribe(
  //       res => {
  //         this.showAlert()
  //         this.sending = false
  //       },
  //       er => {
  //         this.showAlertError()
  //         this.sending = false
  //       }
  //     )
  //   }
  // }

  showAlert(){
    const a = document.querySelector("#alert")
    a?.classList.toggle("d-none")
					setTimeout(() => {
						a?.classList.toggle("d-none")
		}, 2500);
  }

  showAlertError(){
    const a = document.querySelector("#alert-error")
    a?.classList.toggle("d-none")
					setTimeout(() => {
						a?.classList.toggle("d-none")
		}, 2500);
  }

  getCartType(loyaltyCardType:any) {
    if(loyaltyCardType === "TCF00001")
        return "STANDARD"
    else if(loyaltyCardType === "TCF00002")
        return "SILVER"
    else if(loyaltyCardType === "TCF00003")
        return "GOLD"
    else if(loyaltyCardType === "TCF00004")
        return "PLATINIUM"
    else if(loyaltyCardType === "TCF00005")
        return "TEST"
    else if(loyaltyCardType === "TCF00006")
        return "PLATINIUM 10%"
    else if(loyaltyCardType === "TCF00007")
        return "SOCIETE 10%"
    else if(loyaltyCardType === "TCF00008")
        return "SOCIETE 10% 3M"
    else if(loyaltyCardType === "TCF00009")
        return "SOCIETE 5%"
    else if(loyaltyCardType === "TCF00010")
        return "SOCIETE %5 CASH"
    else if(loyaltyCardType === "TCF00011")
        return "SILVER PLUS"
    else if(loyaltyCardType === "TCF00012")
        return "STANDARD PLUS"
    else if(loyaltyCardType === "TCF00013")
        return "GOLD PLUS"
    else if(loyaltyCardType === "TCF00014")
        return "PLATINIUM PLUS"
    else if(loyaltyCardType === "TCF00015")
        return "GOLD DISTRIBUTION"
    else if(loyaltyCardType === "TCF00016")
        return "CLIENT 2"
    else
        return "aucune"
  }

}
