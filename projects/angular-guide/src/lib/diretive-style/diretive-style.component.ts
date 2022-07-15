import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-diretive-style',
  templateUrl: './diretive-style.component.html',
  styleUrls: ['./diretive-style.component.scss'],

})
export class DiretiveStyleComponent implements OnInit {
 color = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeColor() {
    this.color = !this.color;
  }

  getColor() {
    return this.color === true ? 'green' : 'red';
  }
}
