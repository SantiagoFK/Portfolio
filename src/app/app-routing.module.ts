import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './portfolio/pages/home-page/home-page.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomePageComponent, title: 'Portfolio | Home' },
    { 
        path: 'skills',   
        loadComponent: () => import('./portfolio/pages/skills-page/skills-page.component')
            .then(c => c.SkillsPageComponent ),  
        title: 'Portfolio | Skills'
    },
    { 
        path: 'education', 
        loadComponent: () => import('./portfolio/pages/education-page/education-page.component')
            .then(c => c.EducationPageComponent ),  
        title: 'Portfolio | Education'
    },
    { 
        path: 'projects', 
        loadComponent: () => import('./portfolio/pages/projects-page/projects-page.component')
            .then(c => c.ProjectsPageComponent), 
        title: 'Porfolio | Projects'
    },
    { 
        path: 'about', 
        loadComponent: () => import('./portfolio/pages/about-page/about-page.component')
        .then(c => c.AboutPageComponent), 
        title: 'Portfolio | About'
    },
    {
        path: '**',
        loadComponent: () => import('./portfolio/pages/error-page/error-page.component')
        .then(c => c.ErrorPageComponent ), 
        title: 'Oops... an Error!'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
