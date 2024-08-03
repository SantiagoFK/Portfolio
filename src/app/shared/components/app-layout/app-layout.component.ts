import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pf-app-layout',
  standalone: true,
  imports: [],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent implements OnInit
{
  ngOnInit(): void {
    console.log(window.screen.width);
    console.log(window.screen.height);
  }

}
