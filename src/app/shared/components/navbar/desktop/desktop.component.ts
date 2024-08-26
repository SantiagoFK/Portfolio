import { Component } from '@angular/core';
import { LinkComponent } from '../../link/link.component';
import { ParagraphComponent } from '../../paragraph/paragraph.component';
import { IconComponent } from '../../icon/icon.component';

@Component({
  selector: 'pf-nav-desktop',
  standalone: true,
  imports: [LinkComponent, ParagraphComponent, IconComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent {

}
