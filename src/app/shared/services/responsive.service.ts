import { Injectable } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService 
{
  currentHeigth?: number = visualViewport?.height
  currentWidth?: number = visualViewport?.width

  constructor() { }

  window$: Observable<Event> = fromEvent(window.visualViewport!, 'resize');

  observer: Subscription = this.window$.subscribe({
    next: () => {
      this.currentHeigth = visualViewport?.height
      this.currentWidth = visualViewport?.width
    }
  }) 
  
  get heigth(): number | undefined
  {
    return this.currentHeigth;
  }

  get width(): number | undefined
  {
    return this.currentWidth;
  }
}
