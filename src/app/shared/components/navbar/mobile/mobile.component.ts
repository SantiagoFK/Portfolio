import { Component } from '@angular/core';
import { IconComponent } from '../../icon/icon.component';
import { ParagraphComponent } from '../../paragraph/paragraph.component';

@Component({
  selector: 'pf-nav-mobile',
  standalone: true,
  imports: [IconComponent, ParagraphComponent],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.scss'
})
export class MobileComponent 
{
  onClicked()
  {
    //should open side bar
    console.log("click")
  }
}
