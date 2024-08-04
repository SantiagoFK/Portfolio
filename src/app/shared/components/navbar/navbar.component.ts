import { Component } from '@angular/core';
import { ParagraphComponent } from "../paragraph/paragraph.component";
import { LinkComponent } from '../link/link.component';
import { MobileComponent } from './mobile/mobile.component';
import { DesktopComponent } from './desktop/desktop.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'pf-navbar',
  standalone: true,
  imports: [ParagraphComponent, LinkComponent, MobileComponent, DesktopComponent, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  mobileMode: boolean = true;
}
