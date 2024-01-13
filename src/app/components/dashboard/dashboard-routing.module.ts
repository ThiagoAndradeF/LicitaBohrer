import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LazyLoadEvent } from 'primeng/api';
@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DashboardComponent }
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {
    totalRecords!: number;

    constructor() {}

    ngOnInit() {

    }

    loadCustomers(event: LazyLoadEvent) {
    }

    onSelectionChange(value = []) {
    }

}
