import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    searchTerm: any = {};

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit(params: any) {
        alert('submit filter');
        console.log(params);
    }
}
