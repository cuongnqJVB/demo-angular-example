import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';

// Component
import { DashboardComponent } from './dashboard.component';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        NzTableModule,
        NzInputModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent
            }
        ])
    ]
})
export class DashboardModule { }
