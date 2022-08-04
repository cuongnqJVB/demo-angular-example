import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';

// Component
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
    declarations: [
        UserListComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        NzTableModule,
        NzButtonModule,
        RouterModule.forChild([
            {
                path: '',
                component: UserListComponent
            }
        ])
    ]
})
export class UserModule { }
