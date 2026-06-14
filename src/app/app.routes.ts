import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./inicio/inicio.component').then(m => m.InicioComponent)
    },
        {
        path: 'inicio',
        loadComponent: () => import('./inicio/inicio.component').then(m => m.InicioComponent)
    },
    {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/module/usuarios.module').then(m => m.UsuariosModule)
    }

];
