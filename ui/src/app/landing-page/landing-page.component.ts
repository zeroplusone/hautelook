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
  leftShoes = null;
  rightShoes = null;
  
  endFlag = false;

  // const value
  static LEFT_INDEX = 0;
  static RIGHT_INDEX = 1;

  constructor() { 
    // generate Random List
    while(this.shoes_list.length != 0){
      var randomNum = this.getRandomShoes();
      this.select_list.push(this.shoes_list[randomNum]);
      this.shoes_list.splice(randomNum, 1);
    }
    // select two candidate
    this.selectCandidate();
  }

  getRandomShoes() {
    return Math.floor((Math.random() * this.shoes_list.length) );
  }

  selectCandidate(){
    if(this.select_list.length<2){
      this.showResult();
    }else{
      this.leftShoes = this.select_list[LandingPageComponent.LEFT_INDEX];
      this.rightShoes = this.select_list[LandingPageComponent.RIGHT_INDEX];
    }
  }

  showResult(){
    console.log("end");
    this.endFlag = true;
  }

  leftClick(){
    if(!this.endFlag){
      console.log("left");
      this.select_list.splice(LandingPageComponent.RIGHT_INDEX, 1);
      // move winner to the end of queue
      var tmp = this.select_list.shift();
      this.select_list.push(tmp);
      // update candidate
      this.selectCandidate();
    }
  }

  rightClick(){
    if(!this.endFlag){
      console.log("right");
      this.select_list.splice(LandingPageComponent.LEFT_INDEX, 1);
      // move winner to the end of queue
      var tmp = this.select_list.shift();
      this.select_list.push(tmp);
      // update candidate
      this.selectCandidate();
    }
  }

  ngOnInit() {
  }

}
