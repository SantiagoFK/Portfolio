import { Component, inject } from '@angular/core';
import { ParagraphComponent } from "../paragraph/paragraph.component";
import { LinkComponent } from '../link/link.component';
import { MobileComponent } from './mobile/mobile.component';
import { DesktopComponent } from './desktop/desktop.component';
import { IconComponent } from '../icon/icon.component';
import { ResponsiveService } from '../../services/responsive.service';


@Component({
  selector: 'pf-navbar',
  standalone: true,
  imports: [ParagraphComponent, LinkComponent, MobileComponent, DesktopComponent, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent 
{
  responsiveService : ResponsiveService = inject(ResponsiveService);
}
