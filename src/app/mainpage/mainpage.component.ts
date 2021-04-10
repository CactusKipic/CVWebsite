import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  private buttonMap = new Map();

  constructor() { }

  ngOnInit(): void {
  }

  toggleButton(name: string){
    this.buttonMap.set(name, !this.buttonMap.get(name));
  }

  getButtonValue(name: string): boolean{
    return this.buttonMap.get(name);
  }

}
