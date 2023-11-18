import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabDrivePage } from './tab-drive.page';

const routes: Routes = [
  {
    path: '',
    component: TabDrivePage,
    children: [
      {
        path: 'inicio-cliente',
        loadChildren: () => import('./../../pages/inicio-cliente/inicio-cliente.module').then( m => m.InicioClientePageModule)
      },
      {
        path: 'perfilcliente',
        loadChildren: () => import('./../../pages/perfilcliente/perfilcliente.module').then( m => m.PerfilclientePageModule)
      },
      {
        path: 'viaje',
        loadChildren: () => import('./../../pages/viaje/viaje.module').then( m => m.ViajePageModule)
      },
      {
        path: 'actividad',
        loadChildren: () => import('./../../pages/actividad/actividad.module').then( m => m.ActividadPageModule)
      },
      {
        path: '',
        redirectTo: '/tab-drive/inicio-cliente',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabDrivePageRoutingModule {}
