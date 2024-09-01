import { Component, EventEmitter, Output } from '@angular/core';
import { LinkComponent } from '../../link/link.component';
import { ParagraphComponent } from '../../paragraph/paragraph.component';
import { IconComponent } from '../../icon/icon.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'pf-nav-desktop',
  standalone: true,
  imports: [LinkComponent, ParagraphComponent, IconComponent, TranslateModule],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent {
  @Output() changeLanguageEvent = new EventEmitter<string>();

  changeLanguage(label: string){ 
    this.changeLanguageEvent.emit(label);
  } 
}
