import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent} from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { MemberListComponent } from './member-list/member-list.component';

const appRoutes: Routes = [
  {
     path: '',
     component: SplashComponent
   },
   {
     path: 'about',
     component: AboutComponent
   },
   {
     path: 'members',
     component: MemberListComponent
   }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
