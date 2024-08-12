import { Component, inject, OnInit } from '@angular/core';
import { ParagraphComponent } from "../paragraph/paragraph.component";
import { LinkComponent } from '../link/link.component';
import { MobileComponent } from './mobile/mobile.component';
import { DesktopComponent } from './desktop/desktop.component';
import { IconComponent } from '../icon/icon.component';
import { ResponsiveService } from '../../services/responsive.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'pf-navbar',
  standalone: true,
  imports: [ParagraphComponent, LinkComponent, MobileComponent, DesktopComponent, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit
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

  
}
