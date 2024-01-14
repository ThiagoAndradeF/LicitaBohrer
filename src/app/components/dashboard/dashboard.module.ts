import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { DialogModule } from 'primeng/dialog';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { LicitacoesComponent } from './componts/licitacoes/licitacoes.component';
import { LicitacoesModule } from './componts/licitacoes/licitacoes.module';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DashboardsRoutingModule,
        DialogModule,
        KeyFilterModule,
        DropdownModule,
        MultiSelectModule,
        ZXingScannerModule,
        LicitacoesModule,
        AccordionModule

    ],
    declarations: [DashboardComponent],
    providers: [
      DatePipe // Adicione o DatePipe aqui
    ]
})
export class DashboardModule { }
