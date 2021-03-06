import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: '404', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
    { path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
