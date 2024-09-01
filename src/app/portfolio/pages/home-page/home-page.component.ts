import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  router: Router = inject(Router)

  goToSkills()
  {
    this.router.navigate(['skills']);
  }

  goToEducation()
  {
    this.router.navigate(['education']);
  }

  goToProjects()
  {
    this.router.navigate(['projects']);
  }
}
