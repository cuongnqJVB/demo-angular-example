import { Component, OnInit } from '@angular/core';

// Module & Service
import { UserService } from '../services';
import { User } from '../models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  // Declare State
  users: any = [];

  constructor(
    private userService: UserService
  ) { }

  async ngOnInit() {
    this.users = await this.userService.getUsers()
      .then((res) => res);
  }

}
