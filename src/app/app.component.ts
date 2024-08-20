import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { AppLayoutComponent } from './shared/components/app-layout/app-layout.component';
import { TitleComponent } from './shared/components/title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, AppLayoutComponent, TitleComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Portfolio';
}
