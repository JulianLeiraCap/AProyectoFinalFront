import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './components/userlist/userlist.component';
import { ModifyComponent } from './components/modify/modify.component';

const routes: Routes = [
  {
    path:'user',
    component:UserlistComponent
  },
  {
    path:'add',
    component: ModifyComponent
  },
  {
    path:'modify/:id',
    component: ModifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
