import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pf-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent
{
  @Output() clicked = new EventEmitter<any>;

  @Input() set icon(value: string){
    this._icon = value ?? undefined;
  }
  _icon?: string;

  onClick()
  {
    this.clicked.emit();
  }
}
