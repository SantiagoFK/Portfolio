import { Component, inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageOption } from './shared/interfaces/language-option';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  private readonly availableLanguages = ['en', 'es'];
  private readonly translateService = inject(TranslateService);
  languageOptions: LanguageOption[] = [];

  ngOnInit(): void {
    this.translateService.addLangs(this.availableLanguages);
    this.translateService.setDefaultLang('en');
    this.buildLanguageOptions();
  }
  
  private buildLanguageOptions()
  {
    const ENGLISH = this.translateService.get('en');
    const SPANISH = this.translateService.get('es');

    forkJoin([ENGLISH, SPANISH]).subscribe({
      next: (response) => {
        this.languageOptions = [
          {
            value: this.availableLanguages[0],
            label: response[0].toUpperCase()
          },
          {
            value: this.availableLanguages[1],
            label: response[1].toUpperCase()
          }
        ]
      }
    })
  }

  public changeLanguage(label: string)
  {
    this.translateService.use(label);
  }
}
