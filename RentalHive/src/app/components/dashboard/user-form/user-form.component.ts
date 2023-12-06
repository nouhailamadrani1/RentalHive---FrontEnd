import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../services/UserService/user-service.service'; 
import { User } from '../../../services/UserService/User'; 
import { Role } from '../../../services/UserService/Role'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  user: User = {
    id: 0,
    name: '',
    role: Role.Client,
    email: '',
    numberPhone: '',
  };

  userAdded: boolean = false;

  constructor(private userService: UserServiceService, private router: Router) {}

  addUser(): void {
    this.userService.addUser(this.user).subscribe(
      (newUser) => {
        console.log('User added successfully:', newUser);
        this.userAdded = true;
        // this.router.navigate(['/users']);
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }

  closeAlert(): void {
    this.userAdded = false;
  }
}
