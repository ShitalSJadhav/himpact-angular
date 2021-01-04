import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserDetails } from 'src/app/models/user-detail';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  id: number;
  userDetails: UserDetails;

  constructor(
    private route: ActivatedRoute,
    private userApi: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserIdFromRouter();
    this.getUserDetails();
  }

  getUserIdFromRouter() {
    this.id = +this.route.snapshot.params['id'];
  }

  getUserDetails() {
    this.userApi.getUserDetailsById(this.id).subscribe((res) => {
      this.userDetails = res.data;
      // let x=this.userDetails.firstName;
    });
  }

  navigateToUserView() {
    this.router.navigate(['/users']);
  }
}
