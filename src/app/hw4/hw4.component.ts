import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw4',
  templateUrl: './hw4.component.html',
  styleUrls: ['./hw4.component.css']
})
export class Hw4Component {
  ingredients1 = '';
  ingredients2 = '';
  ordered = false;

  reorder() {
    this.ingredients1 = '';
    this.ingredients2 = '';
    this.ordered = false;
  }



  checkIngredients() {
    if (this.ingredients1.length > 0 && this.ingredients2.length > 0) {
    this.ordered = true;
    }
  }
}
