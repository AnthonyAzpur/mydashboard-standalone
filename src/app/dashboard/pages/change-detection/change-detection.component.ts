import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ CommonModule ,TitleComponent],
  template: `
  <app-title title="Change Detection" ></app-title>

<pre> {{frameworkAsSignal() | json }} </pre>

<pre> {{frameworkAsProperty | json}}  </pre>

  `

})
export  default class ChangeDetectionComponent {

  public frameworkAsSignal = signal ({
    name : 'Angular',
    releaseDate: 2016,
  })
  public frameworkAsProperty = ({
    name : 'Angular',
    releaseDate: 2016,
  });

  constructor () {

    setTimeout (() =>{

      // this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update( value => ({
        ...value,
        name: 'React'

      }))
      console.log('hecho');
    },3000);
  }


}
