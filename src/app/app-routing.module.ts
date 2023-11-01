import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ForgotpassPageModule } from './pages/forgotpass/forgotpass.module';
import { RegisteruserPageModule } from './pages/registeruser/registeruser.module';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
    
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registerbase',
    loadChildren: () => import('./pages/registerbase/registerbase.module').then( m => m.RegisterbasePageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./pages/forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'registeruser',
    loadChildren: () => import('./pages/registeruser/registeruser.module').then( m => m.RegisteruserPageModule)
  },
  {
    path: 'tab-inicial',
    loadChildren: () => import('./pages/tab-inicial/tab-inicial.module').then( m => m.TabInicialPageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'inicio-cliente',
    loadChildren: () => import('./pages/inicio-cliente/inicio-cliente.module').then( m => m.InicioClientePageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'perfilcliente',
    loadChildren: () => import('./pages/perfilcliente/perfilcliente.module').then( m => m.PerfilclientePageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./pages/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }

  },
  {
    path: 'actividad',
    loadChildren: () => import('./pages/actividad/actividad.module').then( m => m.ActividadPageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'registerdriver',
    loadChildren: () => import('./pages/registerdriver/registerdriver.module').then( m => m.RegisterdriverPageModule)
  },
  {
    path: 'viaje',
    loadChildren: () => import('./pages/viaje/viaje.module').then( m => m.ViajePageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  },

    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
