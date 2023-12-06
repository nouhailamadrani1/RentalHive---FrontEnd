
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../../services/UserService/user-service.service'; 
import { User } from '../../../services/UserService/User'; 
import { Role } from '../../../services/UserService/Role'; 

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

  constructor(private userService: UserServiceService) {}

  addUser(): void {
    this.userService.addUser(this.user).subscribe(
      (newUser) => {
        console.log('User added successfully:', newUser);
        // Optionally, you can redirect to the users list page or perform other actions.
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }
}