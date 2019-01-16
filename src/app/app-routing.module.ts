import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatListComponent } from 'src/app/chat-list/chat-list.component';
import { LoginComponent } from 'src/app/login/login.component';
import { StatisticComponent } from 'src/app/statistic/statistic.component';
import { UserComponent } from 'src/app/user/user.component';
import { ControlPageComponent } from 'src/app/control-page/control-page.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { ChatFromLocalStorageComponent } from './chat-from-local-storage/chat-from-local-storage.component';

const routes: Routes = [ 
  {  path:'', redirectTo: '/control',  pathMatch: 'full'},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'statistic',
  component: StatisticComponent
},
{  path:'home', 
  component: ChatListComponent
},
{
  path: 'control',
  component: ControlPageComponent
},
{
  path: 'user',
  component: UserComponent
},
{
  path: 'chat/:id',
  component: ChatDetailComponent
},
{
  path: 'testchat',
  component: ChatFromLocalStorageComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
