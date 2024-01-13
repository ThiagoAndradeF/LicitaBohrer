import { DashboardModule } from './../dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'qrReader', data: { breadcrumb: 'qrReader' }, loadChildren: () => import('../dashboard/dashboard.component').then(m => m.DashboardComponent) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class UIkitRoutingModule { }
