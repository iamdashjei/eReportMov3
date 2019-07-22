import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tipsandsafety',
  templateUrl: './tipsandsafety.page.html',
  styleUrls: ['./tipsandsafety.page.scss'],
})
export class TipsandsafetyPage implements OnInit {

  constructor(public navCtrl: NavController){}

  presentEmergencyPage() {
    this.navCtrl.navigateForward('myemergency');
  }

  ngOnInit() {
  }

}
