import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '',       component: HomeComponent, pathMatch: 'full' }, 
  { path: 'index',  component: HomeComponent, pathMatch: 'full' },  
  { path: 'movies', component: HomeComponent, pathMatch: 'full' },  
  { path: "**",     component:  HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
