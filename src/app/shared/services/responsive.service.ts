import { Injectable } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService 
{
  currentHeigth?: number = visualViewport?.height
  currentWidth?: number = visualViewport?.width

  resize$: Observable<Event> = fromEvent(window.visualViewport!, 'resize');
  load$: Observable<Event> = fromEvent(window, 'load')

  resizeObserver: Subscription = this.resize$.subscribe({
    next: () => {
      this.currentHeigth = visualViewport?.height
      this.currentWidth = visualViewport?.width
    }
  }) 

  loadObserver: Subscription = this.load$.subscribe({
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
