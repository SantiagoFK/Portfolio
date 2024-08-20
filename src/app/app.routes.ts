import { Routes } from '@angular/router';
import { HomePageComponent } from './portfolio/pages/home-page/home-page.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomePageComponent },
    { 
        path: 'skills',   
        loadComponent: () => import('./portfolio/pages/skills-page/skills-page.component')
            .then(c => c.SkillsPageComponent ),  
        title: 'Skills'
    },
    { 
        path: 'education', 
        loadComponent: () => import('./portfolio/pages/education-page/education-page.component')
            .then(c => c.EducationPageComponent ),  
        title: 'Education'
    },
    { 
        path: 'projects', 
        loadComponent: () => import('./portfolio/pages/projects-page/projects-page.component')
            .then(c => c.ProjectsPageComponent), 
        title: 'Projects'
    },
    { 
        path: 'about', 
        loadComponent: () => import('./portfolio/pages/about-page/about-page.component')
        .then(c => c.AboutPageComponent), 
        title: 'About'
    },
    {
        path: '**',
        loadComponent: () => import('./portfolio/pages/error-page/error-page.component')
        .then(c => c.ErrorPageComponent ), 
        title: 'Oops... an Error!'
    }
];
