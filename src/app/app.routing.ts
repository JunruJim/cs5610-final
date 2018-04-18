import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {LoginComponent} from './views/user/login/login.component';
import {RegisterComponent} from './views/user/register/register.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {RstSearchComponent} from './views/rst/rst-search/rst-search.component';
import {RstListComponent} from './views/rst/rst-list/rst-list.component';
import {RstEditComponent} from './views/rst/rst-edit/rst-edit.component';
import {FaqListComponent} from './views/faq/faq-list/faq-list.component';
import {RstNewComponent} from './views/rst/rst-new/rst-new.component';
import {FaqNewComponent} from './views/faq/faq-new/faq-new.component';
import {FaqEditComponent} from './views/faq/faq-edit/faq-edit.component';
import {ReviewListComponent} from './views/review/review-list/review-list.component';
import {ReviewEditComponent} from './views/review/review-edit/review-edit.component';
import {ReviewNewComponent} from './views/review/review-new/review-new.component';
import {BlogListComponent} from './views/blog/blog-list/blog-list.component';
import {BlogEditComponent} from './views/blog/blog-edit/blog-edit.component';
import {BlogNewComponent} from './views/blog/blog-new/blog-new.component';
import {BlogPageComponent} from './views/blog/blog-page/blog-page.component';
import {RstPageComponent} from './views/rst/rst-page/rst-page.component';
import {AuthGuard} from './services/auth-guard.service';
import {FaqPageComponent} from './views/faq/faq-page/faq-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // { path: 'profile', component: ProfileComponent },
  // { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: 'search', component: RstSearchComponent },
  { path: 'rst', component: RstListComponent },
  { path: 'rst/:rstid', component: RstEditComponent},
  { path: 'rst/new', component: RstNewComponent},
  { path: 'rst/:rstid/page', component: RstPageComponent},
  { path: 'faq', component: FaqListComponent},
  { path: 'faq/new', component: FaqNewComponent},
  { path: 'faq/:fid', component: FaqEditComponent},
  { path: 'faq/:fid/page', component: FaqPageComponent},
  { path: 'rst/:rstid/review', component: ReviewListComponent},
  { path: 'rst/:rstid/review/new', component: ReviewNewComponent},
  { path: 'rst/:rstid/review/:revid', component: ReviewEditComponent},
  { path: 'blog', component: BlogListComponent},
  { path: 'blog/new', component: BlogNewComponent},
  { path: 'blog/:bid', component: BlogEditComponent},
  { path: 'blog/:bid/page', component: BlogPageComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
