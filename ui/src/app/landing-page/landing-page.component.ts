import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

// Shoes Class
import { Shoes } from '../Shoes';
// mock data
import { SHOESLIST } from '../mock-shoes';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class LandingPageComponent implements OnInit {

  shoes_list = SHOESLIST;
  select_list = [];
  summary_list = [];
  constructor() { 
    // generate Random List
    while(this.shoes_list.length != 0){
      var randomNum = this.getRandomShoes();
      this.select_list.push(this.shoes_list[randomNum]);
      this.shoes_list.splice(randomNum, 1);
    }
  }

  getRandomShoes() {
    return Math.floor((Math.random() * this.shoes_list.length) );
  }

  onClick(){
    console.log("HI")
  }

  ngOnInit() {
  }

}
