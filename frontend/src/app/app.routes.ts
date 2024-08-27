import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProfileComponent } from './features/profile/profile.component';
import { PublicComponent } from './features/public/public.component';
import { ProtectedComponent } from './features/protected/protected.component';
import { AdminComponent } from './features/admin/admin.component';
import { CallbackComponent } from './features/callback/callback.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'public', component: PublicComponent},
    {path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]},
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
    {path: 'callback', component: CallbackComponent},
    {path: '**', component: NotFoundComponent},    
];
