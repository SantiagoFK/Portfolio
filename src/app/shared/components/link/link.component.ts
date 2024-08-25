import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'pf-link',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent implements OnInit{

  @Input() set link(value: string)
  {
    this._link = value ? value : '/';
  }
  _link?: string;

  ngOnInit(): void {
    console.log(this._link);
  }
}
