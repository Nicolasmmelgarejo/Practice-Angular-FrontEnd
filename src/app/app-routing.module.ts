import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AbjectsComponent } from './components/abjects/abjects.component';
import { ObsectsnComponent } from './components/abjects/obsectsn/obsectsn.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AuthGuard } from './services/auth.guard';
import { NoAuthGuard } from './services/no-auth.guard';

const routes:Routes=[
  {
    path:'login',
    component:LogInComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path:'objects',
    component:AbjectsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'singin',
    component:SingInComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'usuarios',
    component:UsuariosComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'login'
  }
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
