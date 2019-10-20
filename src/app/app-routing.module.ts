import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInGuard } from './shared/guards/sign-in.guard';


const routes: Routes = [
  {path: 'sign-in', loadChildren: './pages/sign-in/sign-in.module#SignInModule' },
  {path: 'content',  canActivate: [SignInGuard], loadChildren: './pages/content/content.module#ContentModule' },
  {path: '**', redirectTo: 'content', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }