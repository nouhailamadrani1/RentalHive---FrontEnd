// users.component.ts

import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../services/UserService/user-service.service'; 
import { User } from '../../../services/UserService/User'; 
import { Role } from '../../../services/UserService/Role'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    // Load users when the component is initialized
    this.loadUsers();
  }


  private loadUsers(): void {
    // Call the service method to get all users
    this.userService.getAllUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error: any) => {
        console.error('Error loading users:', error);
      }
    );
  }

  // Renamed method for clarity
  getReadableUserRole(role: Role): string {
    return role === Role.Client ? 'Client' : 'Manager';
  }
}
