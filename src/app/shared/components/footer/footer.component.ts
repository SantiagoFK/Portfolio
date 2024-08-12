import { Component } from '@angular/core';
import { ParagraphComponent } from "../paragraph/paragraph.component";

@Component({
  selector: 'pf-footer',
  standalone: true,
  imports: [ParagraphComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
