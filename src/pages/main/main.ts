import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {MorePage} from '../more/more';
import { LoadingController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import {SettingsPage} from '../settings/settings';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  items;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController,public platform: Platform,
              public actionsheetCtrl: ActionSheetController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      { title: 'AngularJS', img: 'AngularJS.svg'},
      { title: 'ReactJS', img: 'react.png'},
      { title: 'JavaScript', img: 'JavaScript.png'},
      { title: 'CSS3', img: 'css.png'}
    ];
  }
  moveTo(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present(MorePage);
    this.navCtrl.push(MorePage);
  }
  moveBo(){
    this.navCtrl.push(SettingsPage);
  }
  /*action form*/

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            this.items = [ { title: 'ReactJS', img: 'react.png'},
              { title: 'JavaScript', img: 'JavaScript.png'},
              { title: 'CSS3', img: 'css.png'}];
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'view',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}

