import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {
  pet: string = "puppies";
  isAndroid: boolean = false;
  items;
  back;
  progg;

  constructor(public navCtrl: NavController, public navParams: NavParams,platform: Platform) {
    this.isAndroid = platform.is('android');
    this.initializeItems();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

  initializeItems() {
    this.items = [
      { title: 'AngularJS', img: 'AngularJS.svg'},
      { title: 'ReactJS', img: 'react.png'},
      { title: 'JavaScript', img: 'JavaScript.png'},
      { title: 'CSS3', img: 'css.png'},
      { title: 'Bootstrap', img: 'bootstrap.png'},
      { title: 'SASS', img: 'sass.svg'},
      { title: 'LESS', img: 'less.png'},
      { title: 'Coffee Script', img: 'coffee.png'},
      { title: 'HTML5', img: 'HTML5.png'},
      { title: 'D3JS', img: 'd3.png'}
    ];
    this.back = [
      { title: 'NodeJS', img: 'node.png'},
      { title: 'Java', img: 'java.png'},
      { title: 'C#', img: 'csharp.png'},
      { title: '.net', img: 'net.png'},
      { title: 'Phython', img: 'phython.png'},
      { title: 'c++', img: 'c++.png'}
    ];
    this.progg = [
      { title: 'Oracle', img: 'oracle.png'},
      { title: 'SQL', img: 'my.png'},
      { title: 'MongoDB', img: 'mongo.png'},
      { title: 'Hadoop', img: 'hadoop.png'},
      { title: 'Cassandra', img: 'cass.png'},
      { title: 'PostSQL', img: 'post.png'}
    ];
  }

}
