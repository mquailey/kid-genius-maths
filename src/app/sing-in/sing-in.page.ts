import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.page.html',
  styleUrls: ['./sing-in.page.scss'],
})
export class SingInPage implements OnInit {

  constructor(
	private route: Router,
    private navCtrl: NavController
	) { }

  ngOnInit() {
  }
	
 goToForgotPassword() {
    this.route.navigate(['./forgot-password']);
  } 
	
  goTohome() {
    this.navCtrl.navigateRoot(['./home']);
  } 
  goToSignUP() {
    this.navCtrl.navigateRoot(['./sing-up']);
  } 

}
