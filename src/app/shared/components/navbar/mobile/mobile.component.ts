import { Component, ElementRef, ViewChild } from '@angular/core';
import { IconComponent } from '../../icon/icon.component';
import { ParagraphComponent } from '../../paragraph/paragraph.component';
import { LinkComponent } from '../../link/link.component';

@Component({
  selector: 'pf-nav-mobile',
  standalone: true,
  imports: [IconComponent, ParagraphComponent, LinkComponent],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.scss'
})
export class MobileComponent 
{
  sideBarOpen: boolean = false;

  onClicked()
  {
    //should open side bar
    this.sideBarOpen = !this.sideBarOpen;
    
  }

  close()
  {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
