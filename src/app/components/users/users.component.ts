import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/models/users';
import { Router } from '@angular/router';
import { abort } from 'process';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usersList: Users[];

  constructor(
    private userApi: UserService, 
    private router: Router
    ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userApi.getUsers().subscribe((res) => {
      this.usersList = this.sortByAlphabeticalOrder(res.data);
    });
  }

  sortByAlphabeticalOrder(data: Users[]): Users[] {
    return data.sort((a, b) => {
      if (a.first_name < b.first_name) return -1;
      if (a.first_name > b.first_name) return 1;
      return 0;
    });
  }

  onUserSelect(event) {
    const id:number = event.value;
    setTimeout(() => {
      this.router.navigate(['/user-details', id]);
    }, 1000);
  }
}
