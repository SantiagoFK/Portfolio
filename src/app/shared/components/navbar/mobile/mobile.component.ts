import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { IconComponent } from '../../icon/icon.component';
import { ParagraphComponent } from '../../paragraph/paragraph.component';
import { LinkComponent } from '../../link/link.component';
import { ResponsiveService } from '../../../services/responsive.service';

@Component({
  selector: 'pf-nav-mobile',
  standalone: true,
  imports: [IconComponent, ParagraphComponent, LinkComponent],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.scss'
})
export class MobileComponent implements OnInit
{
  responsiveService : ResponsiveService = inject(ResponsiveService);
  width?: number
  heigth?: number

  ngOnInit(){
    this.responsiveService.resize$.subscribe({
      next: () => {
        this.width = this.responsiveService.width
        this.heigth = this.responsiveService.heigth
      }
    })
  } 

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
