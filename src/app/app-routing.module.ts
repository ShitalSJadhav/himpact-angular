import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'users',
    pathMatch:'full'
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent,
    pathMatch:'full'
  },
  // { 
  //   path: 'service-requests/:servicerequestid',
  //   component:ServiceRequestsComponent ,
  //   pathMatch:'full'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
