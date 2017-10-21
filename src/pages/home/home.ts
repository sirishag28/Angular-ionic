import { Component,ViewChild,trigger, transition, style, state, animate, keyframes} from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { MainPage } from '../main/main';
import {SignPage} from '../sign/sign';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Browse";
  signIn: string = "Sign In";

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public alerCtrl: AlertController) { }
  skip(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present(MainPage);
    this.navCtrl.push(MainPage);
  }

  slideChanged(){
    if(this.slides.isEnd()){
      this.skipMsg = "Alright, I Got It";
    }
  }
  sign(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present(SignPage);
    this.navCtrl.push(SignPage);

  }

/*alert*/
  doAlert() {
    let alert = this.alerCtrl.create({
      message: 'Do you want to Buy!',
      buttons: ['Order']
    });
    alert.present()
  }
}
