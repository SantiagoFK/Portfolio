import { Component } from '@angular/core';
import { ParagraphComponent } from "../paragraph/paragraph.component";
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'pf-navbar',
  standalone: true,
  imports: [ParagraphComponent, LinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
