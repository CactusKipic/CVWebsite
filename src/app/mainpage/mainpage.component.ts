import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Competence } from './competence';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MainpageComponent implements OnInit {

  private buttonMap = new Map();
  private icons: Competence[] = [
      new Competence('Java', '/assets/img/svg/Java.svg', ['app']),
      new Competence('PostgreSQL', '/assets/img/svg/Postgresql.svg', ['database']),
      new Competence('IntelliJ IDEA', '/assets/img/svg/IntelliJ.svg', ['ide']),
      new Competence('Apache JMeter', '/assets/img/svg/JMeter.svg', ['web', 'ide']),
      new Competence('Android Studio', '/assets/img/svg/Android_Studio.svg', ['app', 'ide']),
      new Competence('Git', '/assets/img/svg/Git.svg', ['app', 'ide']),
      new Competence('Unity', '/assets/img/svg/Unity.svg', ['ide']),
      new Competence('TypeScript', '/assets/img/svg/Typescript.svg', ['app', 'web']),
      new Competence('Angular', '/assets/img/svg/Angular.svg', ['web']),
      new Competence('C', '/assets/img/svg/C.svg', ['app']),
  ];
  private selectedTypes: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleButton(name: string): void{
    this.buttonMap.set(name, !this.buttonMap.get(name));
  }

  getButtonValue(name: string): boolean{
    return this.buttonMap.get(name);
  }

  toggleType(e, type: string): void {
      if (this.selectedTypes.includes(type)) {
          this.selectedTypes = this.selectedTypes.filter((val) => val !== type);
      } else {
          this.selectedTypes.push(type);
      }
  }

  typeToggled(type: string): boolean {
      return this.selectedTypes.includes(type);
  }

  resetTypes(): void {
      this.selectedTypes = [];
  }

  getCompetences(): Competence[]{
      if (this.selectedTypes.length === 0) {
          return this.icons;
      }
      const res: Competence[] = [];
      const typeTest = (element) => this.selectedTypes.includes(element);

      this.icons.forEach((c) => {
          if (c.getTypes().some(typeTest)) {
              res.push(c);
          }
      });
      return res;
  }
}
