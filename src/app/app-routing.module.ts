import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './portfolio/pages/home-page/home-page.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomePageComponent, title: 'Santi B. Portfolio | Home' },
    { 
        path: 'skills',   
        loadComponent: () => import('./portfolio/pages/skills-page/skills-page.component')
            .then(c => c.SkillsPageComponent ),  
        title: 'Santi B. Portfolio | Skills'
    },
    { 
        path: 'education', 
        loadComponent: () => import('./portfolio/pages/education-page/education-page.component')
            .then(c => c.EducationPageComponent ),  
        title: 'Santi B. Portfolio | Education'
    },
    { 
        path: 'projects', 
        loadComponent: () => import('./portfolio/pages/projects-page/projects-page.component')
            .then(c => c.ProjectsPageComponent), 
        title: 'Santi B. Portfolio | Projects'
    },
    { 
        path: 'about', 
        loadComponent: () => import('./portfolio/pages/about-page/about-page.component')
        .then(c => c.AboutPageComponent), 
        title: 'Santi B. Portfolio | About'
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
