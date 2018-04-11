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

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent },
  // { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: 'search', component: RstSearchComponent },
  { path: 'user/rst', component: RstListComponent },
  { path: 'user/rst/:rstid', component: RstEditComponent},
  { path: 'user/rst/new', component: RstNewComponent},
  { path: 'user/faq', component: FaqListComponent},
  { path: 'user/faq/new', component: FaqNewComponent},
  { path: 'user/faq/:fid', component: FaqEditComponent},
  { path: 'user/rst/:rstid/review', component: ReviewListComponent},
  { path: 'user/rst/:rstid/review/:revid', component: ReviewEditComponent},
  { path: 'user/rst/:rstid/review/new', component: ReviewNewComponent},
  { path: 'user/rst/:rstid/blog', component: BlogListComponent},
  { path: 'user/rst/:rstid/blog/:bid', component: BlogEditComponent},
  { path: 'user/rst/:rstid/blog/new', component: BlogNewComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
